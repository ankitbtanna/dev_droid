function showSpotLightContent(){spotLightFlag=true;eventsFlag=false;mediaFlag=false;alldownloadFlag=false;spotFlagSet=false;dwPgflag=false;var e="";playlistItemsPageFlag=false;var t=new Array;var n="";$("#spotlightContentArea").empty("");document.getElementById("spotlightList").style.display="block";$.each(jsonData.spotLight,function(t,r){var i="-100";var s="";var o="";o="";e="";var u=r.category;var a=r.category;var f=r.category;arrayOfCategories=u.split(",");for(var l=0;l<arrayOfCategories.length;l++){var c=new Array;c=arrayOfCategories[l].split("-");if(l==arrayOfCategories.length-1){e+=c[0]}else{e+=c[0]+", "}}if(e.length>25){var h=e.substring(0,22);var p=h+"...";e=h}if(r.type=="podcast"||r.type=="documents"||r.type=="events"||r.type=="contributor"){if(r.type=="events"){r.formattype=r.type}else if(r.type=="contributor"){r.formattype=r.type;r.itemId=r.contributorId}if(isOnline&&r.thumbLoc==""){o=r.thumb}else if(isOnline&&r.thumbLoc!=""){o=sPath+"/images/"+r.itemId+"thumb.png"}else if(!isOnline&&r.thumbLoc==""){o="images/TechTime.png"}else if(!isOnline&&r.thumbLoc!=""){o=sPath+"/images/"+r.itemId+"thumb.png"}else{o=sPath+"/images/"+r.itemId+"thumb.png"}var d="";$.each(r.author,function(e,t){if(e==0){d=d+t}else if(e<=r.author.length-1){d=d+", "+t}else{d=d+" "+t}});var v="";if(r.formattype=="Audios"){s="images/icon_audio.png";v="Audios"}if(r.formattype=="Videos"){s="images/icon_video.png";v="Videos"}if(r.type=="contributor"){s="images/icon_interview.png";v="contributor"}if(r.formattype=="Panel Discussions"||type=="PanelDiscussions"){s="images/icon_panelDiscussion.png";v="PanelDiscussions"}if(r.formattype=="Interviews"){s="images/icon_interview.png";v="Interviews"}if(r.formattype=="documents"){s="images/icon_document.png";v="documents"}if(r.formattype=="events"){s="images/icon_event.png";v="events"}if(r.formattype=="Technology Conferences"||r.formattype=="TechnologyConferences"){s="images/icon_techConf.png";v="TechnologyConferences"}var m=a.lastIndexOf("-");var g="";if(m>0){g=r.category.substring(0,m)}else{g=r.category+"..."}$.each(jsonData.category,function(e,t){f=f.substring(0,f.length);var s=f.split(",");spotlightSubFlag=false;var o=r.formattype.replace(/\s+/g,"");if(t.subscribe=="yes"){spotlightSubFlag=true;SpotLightContentFlag=false;n=n+"<div class='listItemClick'><a   onclick=spotlightDataTypes('"+r.itemId+"','"+o+"','"+i+"'); style='text-decoration:none;font-style:normal;color:black;'>"}else{if(spotlightSubFlag!=true){spotlightSubFlag=false;SpotLightContentFlag=true}n=n+"<div class='listItemClick'><a   onclick=spotlightDataTypes('"+r.itemId+"','"+o+"','"+i+"'); style='text-decoration:none;font-style:normal;color:black;'>"}});n=n+"<table border=0  cellpadding='0' cellspacing='0' class='tableList'>";if(g){n=n+"<tr><td></td><td id='' style='margin :0px; padding 0 px; width:65%;font-style:bold;padding-left:12px;font-size:14px;'><b><div style='white-space: nowrap; overflow: hidden; text-overflow: ellipsis; width:80%;'> "+e+"</div></b></td><td></td></tr>"}n=n+"<tr><td id='"+r.itemId+"' class='listItemId' rowspan='3' >";if(r.author.length>=2){n=n+"<img src='"+o+"' style='height:75px;width:150px;border:none;margin:auto;margin-left:15px;margin-top:2%'></img></td>"}else if(r.author.length<2){n=n+"<img src='"+o+"' style='height:75px;width:75px;border:none;margin:auto;margin-left:15px;margin-top:2%'></img></td>"}n=n+"<td class='tdTableListTitle'><b>"+r.title+"</b></td>";if(r.type=="contributor"){$.each(jsonData.contributor,function(e,t){if(r.title==t.title){n=n+"<td class='tdTableListIcons' rowspan='2' align='right'>";n=n+"<embed src='"+s+"' type='image/svg+xml' style='height:20px;width:100%;border:none;padding:0px;margin-right:25px'/>";n=n+"</td></tr> <tr><td id='' class='tdTableAuthor'>"+t.contributor+"</td></tr>"}})}else{n=n+"<td class='tdTableListIcons' rowspan='2' align='right'>";n=n+"<embed src='"+s+"' type='image/svg+xml' style='height:20px;width:100%;border:none;padding:0px;margin-right:15px'/>";n=n+"</td></tr> <tr><td id='' class='tdTableAuthor'>"+r.author+"</td></tr>"}n=n+"<tr><td id='' class='tdTableDate'>"+r.publishedDateStart+"";if(r.type=="contributor"){n=n+"</td>"}else{n=n+showDownloadedIcons(r)+"</td>"}n=n+"<td id='' class='tdIconArrow' align='right'><embed src='images/icon_orangeRight.svg' type='image/svg+xml' width='100%' height='20px;' style='margin-right:15px;'/></td></tr></table>";n=n+"</a></div>";document.getElementById("spotlightListNoSubscribe").style.display="none";$("#spotlightList").html(n)}else if(r.type=="tech_area"){console.log("TECH AREA");var y="";$("#spotlightListArea").empty("");$.each(jsonData.category,function(e,t){if(t.subscribe=="yes"){if(t.categoryid==r.techArea){y=y+"<div class='listItemClick'><div class=dynamicDivList><li><a id="+t.categoryname+" class='anchorCategory'  href='#TAListResult' onclick='showTAListResult("+JSON.stringify(t.categoryname)+" , "+JSON.stringify(t.categoryid)+")'>";y=y+"<div style='color:white;margin-left:3.5%'> "+t.categoryname+"<img src='images/icon_whiteRight.png' width='13' height='13' style='float:right;padding-right:4%;'/>";y=y+"</div></a></li></div></div>"}}else{if(t.categoryid==r.techArea){y=y+"<div class='listItemClick'><div class=dynamicDivList><li><a id="+r.specialAds+" class='anchorCategory'   onclick='displayTA(this);'>";y=y+"<div style='color:white;margin-left:3.5%'> "+r.specialAds+"<img src='images/icon_whiteRight.png' width='13' height='13' style='float:right;padding-right:4%;'/>";y=y+"</div></a></li></div></div>"}}});$("#spotlightListArea").html(y);y=""}else if(r.type=="special_ads"){var b="";$("#spotlightList").html("");if(r.techArea==""||r.techArea==null||r.techArea=="null"){if(r.saURL==""||r.saURL==null||r.saURL=="null"){if(r.saText=="Tech Watch"){b=b+"<div class='listItemClick' style='border :none' onclick = 'showTechWatchContent(currentTechWatchItemId, currentTechWatchItemIndex);'>"}}else{b=b+"<div class='listItemClick' style='border :none' onclick='readMoreDetails(\""+r.saURL+"\");'>"}}else{b=b+"<div id="+r.saText+" data-categoryId="+r.techArea+" class='listItemClick' style='border :none' onclick = 'displayTA1(this)'>"}b=b+"<table border='0' class='tableList'><tr><td style='width : 50%'>";b=b+"<img src='"+r.saImage+"' typeof='foaf:Image' style='padding-left:10px;height:114px; width:139px'></img></td>";b=b+"<td class='tdTableListTitle' style='font-size: large'><b>"+r.saText+"</b></td></tr></table><div>";document.getElementById("spotlightListNoSubscribe").style.display="none";$("#spotlightList").html(b)}})}function displayTA(e){jConfirm("Please subscribe to this Technology Area to view the content.","Tech Time",function(e){if(e==true){showSubscribeContent()}})}function displayTA1(e){var t=e.id;var n=e["data-categoryId"];if(n==""||n=="null"||n==null){n=window.localStorage.getItem("spotlightCategoryID")}else{window.localStorage.setItem("spotlightID",t);window.localStorage.setItem("spotlightCategoryID",n)}var r;$.each(jsonData.category,function(e,t){if(t.categoryid==n){r=t.subscribe}});if(r=="yes"){showTAListResult(t,n)}else{jConfirm("Please subscribe to this Technology Area to view the content.","Tech Time",function(e){if(e==true){showSubscribeContent()}})}}function spotlightDataTypes(e,t,n){console.log(e+"<-------->"+t+"<-------->"+n);console.log("spotlightDataTypes dwPgflag"+dwPgflag);console.log("spotlightDataTypes spotFlagSet"+spotFlagSet);clearSearchTipfromSearch();window.localStorage.setItem("detailPageelementIdSpot",e);window.localStorage.setItem("detailPagetypeSpot",t);window.localStorage.setItem("detailPagecountNumSpot",n);spotLightFlag=true;eventsFlag=false;mediaFlag=false;alldownloadFlag=false;searchFromMainPage=false;searchFromAuthorDetailPage=false;detailFlag=false;hidePopup();var r="";var i="";var s="";currElementIdSpot=e;currElementtypeSpot=t;currElementcountNumSpot=n;showNavigateDiv("navigateDiv");var o="";if(t=="contributor"){$.each(jsonData.spotLight,function(e,t){showAuthorDetailPage(t.title);defaultNavigate();$.mobile.changePage("#detailAuthor")})}else{$.each(jsonData.spotLight,function(n,i){console.log(i.itemId+" =||||= "+e);if(i.itemId==e){var u="";var a="";var f="";var l="";var c="";var h="";var p="";var d="";var v="";u=i.itemId;f=i.audio;l=i.video;c=i.presentation;h=i.transcript;p=i.document;d=JSON.stringify(i.title);if(t=="Audios"){o="images/icon_audio.png";if(l!=""){var m="AV"+u}if(f!=""){var g="AA"+u}if(c!=""){var y="AP"+u}if(h!=""){var b="AT"+u}}if(t=="Videos"){o="images/icon_video.png";if(l!=""){var m="VV"+u}if(f!=""){var g="VA"+u}if(c!=""){var y="VP"+u}if(h!=""){var b="VT"+u}}if(t=="Panel Discussions"||t=="PanelDiscussions"){o="images/icon_panelDiscussion.png";if(l!=""){var m="PV"+u}if(f!=""){var g="PA"+u}if(c!=""){var y="PP"+u}if(h!=""){var b="PT"+u}}if(t=="Interviews"){o="images/icon_interview.png";if(l!=""){var m="IV"+u}if(f!=""){var g="IA"+u}if(c!=""){var y="IP"+u}if(h!=""){var b="IT"+u}}if(t=="documents"){o="images/icon_document.png";if(p!=""){a="DD"+u}p=i.document;lURL=i.localPath}if(t=="events"){o="images/icon_event.png";var w=i.itemId;var E=i.icsfile;$.each(jsonData.spotLight,function(e,t){s="";var n=t.category;arrayOfCategories=n.split("|");for(var r=0;r<arrayOfCategories.length;r++){var i=new Array;i=arrayOfCategories[r].split("-");if(r==arrayOfCategories.length-1){s+=i[0]}else{s+=i[0]+", "}}if(s.length>35){stringToDisplay=s.substring(0,32);var o=stringToDisplay+"...";s=o}})}if(t=="Technology Conferences"||t=="TechnologyConferences"){o="images/icon_techConf.png";if(l!=""){var m="TV"+u}if(f!=""){var g="TA"+u}if(c!=""){var y="TP"+u}if(h!=""){var b="TT"+u}}if(isOnline&&i.actualLoc==""){v=i.actual}else if(isOnline&&i.actualLoc!=""){v=sPath+"/images/"+i.itemId+"thumb.png"}else if(!isOnline&&i.actualLoc==""){v="images/TechTime.png"}else if(!isOnline&&i.actualLoc!=""){v=sPath+"/images/"+i.itemId+"thumb.png"}else{v=sPath+"/images/"+i.itemId+"thumb.png"}posterImage=v;if(t=="Audios"||t=="Videos"||t=="Interviews"||t=="Technology Conferences"||t=="TechnologyConferences"||t=="Panel Discussions"||t=="PanelDiscussions"){r=r+"<br><div class='detailPageDiv' style='border :none'><table border='0' class='detailPageTable'><tr><td style='width : 50%'>";if(l!=""){if(i.isDownloadedVideo=="true"||i.isDownloadedVideo==true){r=r+"<img id="+m+" title='"+i.localPathVideo+"' onclick='downloadSeqArray(this,"+i.isDownloadedVideo+","+d+", 2)' src='"+v+"' class ='actualDetailThumb'  /></div><br><br>"}else{if(isOnline){r=r+"<video id ='liveVid' class ='actualDetailThumb' poster='"+v+"' >";r=r+"<source src='"+l+"' type='video/mp4'></source>";r=r+"our browser does not support the video tag.";r=r+"</video></div><br>"}else{r=r+"<img id ='liveVid1' class ='actualDetailThumb' src='"+v+"' onlick='jAlert('Please go online to view the video.', 'Tech Time');>";r=r+"</div><br>"}}}else if(l==""&&f!=""){r=r+"<div id='audioStreamer'><img id='"+m+"' src='"+v+"' onclick='showAudioStreaming("+u+")' class ='actualDetailThumb' />";r=r+"<video id='audioP' style='width:150px; height:20px;margin:20px 20px;' ><source src='"+f+"' type='video/mpeg'>Your browser does not support the video tag.</video></div>"}r=r+"</td><td style='width:50%;'><br>";if(f!=""){if(i.isDownloadedAudio=="true"){r=r+"<div id='"+g+"' title='"+i.localPathAudio+"' onclick='downloadSeqArray(this,"+i.isDownloadedAudio+","+d+",1)' class='detailPageButtonDiv' ><img src='images/btn_viewAudio.png' height='100%' width='100%' class='detailPageButton' /></div><br>"}else{r=r+"<div id='"+g+"' title='"+f+"' onclick='downloadSeqArray(this,"+i.isDownloadedAudio+","+d+",1)' class='detailPageButtonDiv' ><img src='images/btn_downloadAudio.png' height='100%' width='100%' class='detailPageButton' /></div><br>"}}if(c!=""){if(i.isDownloadedPresentation=="true"){r=r+"<div id='"+y+"' title= '"+i.localPathPresentation+"' onclick= 'downloadSeqArray(this,"+i.isDownloadedPresentation+","+d+",3)' class='detailPageButtonDiv' ><img src='images/btn_viewPresentation.png' height='100%' width='100%' class='detailPageButton'></div><br>"}else{r=r+"<div id='"+y+"' title= '"+c+"' onclick= 'downloadSeqArray(this,"+i.isDownloadedPresentation+","+d+",3)' class='detailPageButtonDiv' ><img src='images/btn_downloadPresentation.png' height='100%' width='100%' class='detailPageButton'></div><br>"}}if(h!=""){if(i.isDownloadedTranscript=="true"){r=r+"<div id='"+b+"' title= '"+i.localPathTranscript+"' onclick= 'downloadSeqArray(this,"+i.isDownloadedTranscript+","+d+",4)' class='detailPageButtonDiv' ><img src='images/btn_viewTranscript.png' height='100%' width='100%' class='detailPageButton'/></div><br>"}else{r=r+"<div id='"+b+"' title= '"+h+"' onclick= 'downloadSeqArray(this,"+i.isDownloadedTranscript+","+d+",4)' class='detailPageButtonDiv'><img src='images/btn_downloadTranscript.png' height='100%' width='100%' class='detailPageButton' /></div><br>"}}if(l!=""){if(i.isDownloadedVideo=="true"||i.isDownloadedVideo==true){r=r+"<div id='"+m+"' title='"+i.localPathVideo+"' onclick='downloadSeqArray(this,"+i.isDownloadedVideo+","+d+", 2)' class='detailPageButtonDiv' ><img src='images/btn_viewVideo.png' height='100%' width='100%' class='detailPageButton' /></div><br>"}else{r=r+"<div id='"+m+"' title='"+l+"' onclick='downloadSeqArray(this,"+i.isDownloadedVideo+","+d+", 2)' class='detailPageButtonDiv'><img src='images/btn_downloadVideo.png' height='100%' width='100%' class='detailPageButton'/></div><br>"}}if(i.qna!=""){r=r+"<a style='text-decoration:none;font-style:normal;' href='#qnaPage'>";r=r+"<div id='"+i.title+"' title='"+i.qna+"' onclick= 'showQnA(this)' class='detailPageButtonDiv'><img src='images/btn_viewQA.png' height='100%' width='100%' class='detailPageButton' /></div></a><br>"}r=r+"</td></tr>";r=r+"<tr><td style='width : 100%' colspan='2'><embed src='"+o+"' type='image/svg+xml' style='height:20px; width:20px;border:none;padding:0px;margin-right:10px'/>";r=r+"<label id='videoTitle' style='font-size: 24px;font-family: AgfaRotisSans;padding-top : 0px;'>"+i.title+"</label><br>"}else if(t=="documents"){r=r+"<br><div class='detailPageDiv' style='border :none'><table border='0' class='detailPageTable'><tr><td style='width : 40%'>";if(i.isDownloaded=="true"){r=r+"<img id='"+a+"' title= '"+i.localPath+"'  src='"+v+"' class ='actualDetailThumb'/><br><br>"}else{r=r+"<img id='"+a+"' title= '"+p+"' src='"+v+"' class ='actualDetailThumb'/><br><br>"}r=r+"</td><td style='width : 60%'><br>";if(p!=""){if(i.isDownloaded=="true"){r=r+"<div id='"+a+"' title= '"+i.localPath+"' onclick= 'downloadSeqArray(this,"+i.isDownloaded+","+d+",5)' class='detailPageButtonDiv'><img src='images/btn_viewPDF.png' height='100%' width='100%' class='detailPageButton' /></div><br><br>"}else{r=r+"<div id='"+a+"' title= '"+p+"' onclick= 'downloadSeqArray(this,"+i.isDownloaded+","+d+",5)' class='detailPageButtonDiv'><img src='images/button_downloadPDF.png' height='100%' width='100%' class='detailPageButton' /></div><br><br>"}}r=r+"<tr><td style='width : 100%' colspan='2'><img id='docThumb' src='"+o+"' style='height:20px; width:20px; border:none;;margin:5px;'/>";r=r+"<label id='videoTitle' style='font-size: 24px;font-family: AgfaRotisSans;padding-top : 0px;'>"+i.title+"</label><br>"}else if(t=="events"){r=r+"<br><div class='detailPageDiv' style='border :none'><table border='0' class='detailPageTable'><tr><td style='width : 50%'>";if(i.authorCount==1){r=r+"<img id='docImg' src='"+v+"' style='border:none; width:90%; margin:10px 10px;'/><br></td>"}else if(i.authorCount==2){r=r+"<img id='docImg' src='"+v+"' style='border:none; width:90%; margin:10px 10px'/><br></td>"}else{r=r+"<img id='docImg' src='"+v+"' style='border:none; width:90%;  margin:10px 10px'/><br></td>"}r=r+"</td><td style='width : 50%'></tr><br>";if(s!=""){r+="<tr><td style='width : 100%' colspan='2'style='font-size: 24px;font-family: AgfaRotisSans;padding-top : 0px;'>"+s+"</td> </tr>"}r=r+"<tr><td style='width : 100%' colspan='2'><img id='docThumb' src='"+o+"' style='height:20px; width:20px; border:none;margin:5px; '/>";r=r+"<label id='videoTitle' style='font-size: 24px;font-family: AgfaRotisSans;padding-top : 0px;'>"+i.title+"</label><br>"}}$.each(i.author,function(e,t){authornamefromid=t;r=r+"<a id='"+t+"'  style='text-decoration:none;font-style:normal;' onclick='showAuthorDetailPage(this.id);' href='#detailAuthor'>";r=r+"<label style='font-size: 14px;font-family: AgfaRotisSans;color:orange'>"+t+"</label></a><br>"});r=r+"<label id='videoDate' style='font-size: 14px;'>"+i.publishedDateStart+"</label><br>";if(t=="events"){r+="<label id='vTime' style='font-size: 14px;'>"+i.etime+"</label><br><br><br>"}r=r+"<label id='videoDescription' style='font-size: 14px;'>"+i.description+"</label>";r=r+"<br><br></td></tr></table>";console.log("spotlightDataTypes dgsdfgfsh dwPgflag"+dwPgflag);if(dwPgflag==false||dwPgflag=="false"){$.mobile.changePage("#detailMediaPage")}})}console.log("spotLightFlag"+spotLightFlag);console.log("spotLightFlag"+eventsFlag);console.log("alldownloadFlag"+alldownloadFlag);console.log("mediaFlag"+mediaFlag);document.getElementById("spotItemContent").style.display="none";$("#detailPageArea").html(r);$("#prevNextContentArea").html("");$("#prevNextContentArea").css("background","transparent");r="";$("video").bind("play",stopMedia)}var currElementIdSpot="";currElementtypeSpot="";currElementcountNumSpot="";var spotlightID="";var spotlightCategoryID=""