function createJsonFormat(){jsonData.category=new Array;jsonData.audio=new Array;jsonData.video=new Array;jsonData.events=new Array;jsonData.panelDiscussions=new Array;jsonData.interviews=new Array;jsonData.documents=new Array;jsonData.techConf=new Array;jsonData.techWatch=new Array;jsonData.spotLight=new Array;jsonData.spotLightDownloaded=new Array;jsonData.contributor=new Array;jsonData.aboutTechTime=new Array;jsonData.faq=new Array;jsonData.loggedUserName="";jsonData.pendingDownloads=new Array;jsonData.techWatch=new Array;jsonData.techWatchQuotes=new Array;jsonData.listOfFiles=new Array;jsonData.playlists=new Array;jsonData.technologySessions=new Array;jsonData.imagesToDownload=new Array}function createJsonPodtype(e){jsonData[e]=new Array}function getSubscribeRss(){var e=document.getElementById("lblUserName").innerHTML;e=e.replace(/\./g,"_");window.localStorage.setItem("userName",e);jsonData.loggedUserName=e;subscribeRss="https://techtime.accenture.com/techtimemobile/subscribe-service/uid=";subscribeRss=subscribeRss+e;$.ajax({type:"GET",url:subscribeRss,dataType:"xml",success:subscribeTA,error:function(e,t,n){console.log("*******************************************************");console.log("In getSubscribeRss Failure"+JSON.stringify(e));console.log("textStatus:"+t+":"+n);console.log("*******************************************************")}})}function subscribeTA(e){loadAboutTechTimeRss();var t=0;$(e).find("item").each(function(){var e=$(this).find("categoryid").text();var n=$(this).find("asset_type").text();var r=$(this).find("categoryname").text();if(e!=""&&t=="1"){subscribeCategoryId.push(e);if(subscribeCatList==""){subscribeCatList=e}else{subscribeCatList=subscribeCatList+"+"+e}}if($(this).find("asset_type").text()&&n=="documents"){isSubscribeDocument="yes"}if($(this).find("asset_type").text()&&n=="podcast"){isSubscribePodcast="yes"}if($(this).find("asset_type").text()&&n=="events"){isSubscribeEvent="yes"}t=1});if(subscribeCatList==""){subscribeCatList="0"}else{rssUrl="https://techtime.accenture.com/techno-areas/"+subscribeCatList+"/audio-video-listing-view";console.log("Saikat Services -- "+rssUrl);eventsRss="https://techtime.accenture.com/techno-areas/"+subscribeCatList+"/events-listing-view";documentRss="https://techtime.accenture.com/techno-areas/"+subscribeCatList+"/documents-listing-view";console.log("rssUrl-->"+rssUrl+"\n eventsRss"+eventsRss+"\n documentRss"+documentRss)}loadtechnologyAreaListUrl()}function loadtechnologyAreaListUrl(){$.ajax({type:"GET",url:technologyAreaListUrl,dataType:"xml",success:displayTAList,error:function(e,t,n){console.log("*******************************************************");console.log(" loadtechnologyAreaListUrl In Failure"+JSON.stringify(e));console.log("textStatus:"+t+":"+n);console.log("*******************************************************")}})}function displayTAList(e){$(e).find("item").each(function(){if($(this).find("parentcategoryid").text()=="0"){var e="false";var t=$(this).find("categoryid").text();$.each(subscribeCategoryId,function(n,r){if(r==t){e="true";noSubscribe="true"}});if(e=="true"){var n=new Object;n.categoryid=$(this).find("categoryid").text();n.categoryname=$(this).find("categoryname").text();n.subCategoryCount="";n.subCategory="";n.subscribe="yes";n.subscribeDocuments=isSubscribeDocument;n.subbscribePodcast=isSubscribePodcast;n.subbscribeEvent=isSubscribeEvent;mainCategoryList.push(n)}else{var n=new Object;n.categoryid=$(this).find("categoryid").text();n.categoryname=$(this).find("categoryname").text();n.subCategoryCount="";n.subCategory="";n.subscribe="no";n.subscribeDocuments="no";n.subbscribePodcast="no";n.subbscribeEvent="no";mainCategoryList.push(n)}}});$.each(mainCategoryList,function(t,n){var r=new Array;var i=new Object;i.categoryid=n.categoryid;i.parentcategoryid=n.categoryid;i.subCategoryName=n.categoryname;i.audio=new Array;i.video=new Array;i.interviews=new Array;i.panelDiscussions=new Array;i.technologySessions=new Array;i.document=new Array;i.event=new Array;i.techConf=new Array;i.contributor=new Array;r.push(i);$(e).find("item").each(function(){if($(this).find("parentcategoryid").text()==n.categoryid){var e=new Object;e.categoryid=$(this).find("categoryid").text();e.parentcategoryid=$(this).find("parentcategoryid").text();e.subCategoryName=$(this).find("categoryname").text();e.audio=new Array;e.video=new Array;e.interviews=new Array;e.panelDiscussions=new Array;e.document=new Array;e.event=new Array;e.techConf=new Array;e.contributor=new Array;e.technologySessions=new Array;r.push(e)}});n.subCategory=r;n.subCategoryCount=r.length});$.each(mainCategoryList,function(e,t){jsonData.category.push(t)});loadAudioVideoURL()}function loadAudioVideoURL(){$.ajax({type:"GET",url:rssUrl,dataType:"xml",success:getAudioVideoItem,error:function(e,t,n){console.log("*******************************************************");console.log("In loadAudioVideoURL Failure"+JSON.stringify(e));console.log("textStatus:"+t+":"+n);console.log("*******************************************************")}})}function getAudioVideoItem(e){$(e).find("item").each(function(){try{var e="";var t="";var n="";var r="";var s=$(this).find("category").text();var o=$(this).find("contentid").text();var u=$(this).find("title").text();u=u.replace(/'/g,"");var a=$(this).find("pods_formattype").text();formatTypeArr.push(a);formatTypeArr=$.unique(formatTypeArr);var f=$(this).find("Content_lang").text();var l=$(this).find("author").text().replace(/\|/g,",");var c=$(this).find("pods_date").text();var h=$(this).find("description").text();var p=$(this).find("qna").text();var d=$(this).find("thumb").text();var v=$(this).find("actual").text();var m=$(this).find("audio").text();var g=$(this).find("video").text();var y=$(this).find("transcript").text();var b=$(this).find("presentation").text();$(this).find("audio").each(function(){e=$(this).attr("length")});$(this).find("video").each(function(){t=$(this).attr("length")});$(this).find("transcript").each(function(){r=$(this).attr("length")});$(this).find("presentation").each(function(){n=$(this).attr("length")});var w=new Array;var E=l.split(",");for(i=0;i<E.length;i++){w.push(E[i])}if(jQuery.inArray(o,audioVideoItemId)==-1){audioVideoItemId.push(o);var S=new Object;S.itemId=o;S.title=u;S.category=s;if(a=="Audios"||a=="Videos"){a="Technology Sessions"}S.type=a;S.author=w;S.publishedDate=c;S.description=h;S.qna=p;S.thumb=d;S.actual=v;S.audioUrl=m;S.audioLength=e;S.audioIsDownloaded="false";S.isDownloadedAudio="false";S.localPathAudio="";S.downloadedDateA="";S.videoUrl=g;S.videoLength=t;S.videoIsDownloaded="false";S.isDownloadedVideo="false";S.localPathVideo="";S.downloadedDateV="";S.transcriptUrl=y;S.transcriptLength=r;S.transcriptIsDownloaded="false";S.isDownloadedTranscript="false";S.localPathTranscript="";S.downloadedDateT="";S.presentationUrl=b;S.presentationLength=n;S.presentationIsDownloaded="false";S.isDownloadedPresentation="false";S.localPathPresentation="";S.downloadedDateP="";S.thumbLoc="";S.actualLoc="";S.selLanguage=f;if(a=="Audios"){jsonData.audio.push(S)}else if(a=="Videos"){jsonData.video.push(S)}else if(a=="Panel Discussions"){jsonData.panelDiscussions.push(S)}else if(a=="Interviews"){jsonData.interviews.push(S)}else if(a=="Technology Conferences"){jsonData.techConf.push(S)}else if(a=="Technology Sessions"){jsonData.technologySessions.push(S)}var x=JSON.stringify(s);x=x.substring(1,x.length-1);var T,N,C;var k=x.length;T=0;while(k!=0&&N!=0&&x!=""){x=x.substring(0,x.length);var L=x.split("|");N=x.indexOf("-")+1;T=x.indexOf("|");k=x.length;C=x.substring(0,N-1);$.each(jsonData.category,function(e,t){$.each(t.subCategory,function(e,t){for(var n=0;n<L.length;n++){var r=L[n].substring(0,L[n].lastIndexOf("-"));var i=L[n].substring(L[n].indexOf("-")+1,L[n].length);var s=r+"-"+i;var u=t.subCategoryName+"-"+t.categoryid;if(i==t.categoryid&&t.subCategoryName==C){if(a=="Audios"){t.audio.push(o)}else if(a=="Videos"){t.video.push(o)}else if(a=="Panel Discussions"){t.panelDiscussions.push(o)}else if(a=="Technology Conferences"){t.techConf.push(o)}else if(a=="Technology Sessions"){t.technologySessions.push(o)}else{t.interviews.push(o)}}}})});if(T==-1){k=0}if(N==0){k=0}C=x.substring(T+1,x.length);x=C}}else{}}catch(A){var O=" getAudioVideoItem - There was an error on this page.\n\n";O+="Error description: "+A.message+"\n\n";O+="Click OK to continue.\n\n";console.log(O)}});loadEventsRss();loadPlaylistsData()}function loadEventsRss(){$.ajax({type:"GET",url:eventsRss,dataType:"xml",success:getEventItem,error:function(e,t,n){console.log("*******************************************************");console.log("In loadEventsRss Failure"+JSON.stringify(e));console.log("Event error \n"+t);console.log("textStatus:"+t+":"+n);console.log("*******************************************************")}})}function getEventItem(e){var t=["January","February","March","April","May","June","July","August","September","October","November","December"];$(e).find("item").each(function(){try{var e,t;var n=$(this).find("category").text();var r=$(this).find("icsfile").text();var s=$(this).find("contentid").text();var o=$(this).find("title").text();o=o.replace(/'/g,"");var u=$(this).find("content_type").text();formatTypeArr.push(u);formatTypeArr=$.unique(formatTypeArr);var a=$(this).find("etime").text();var f=$(this).find("author_count").text();var l=$(this).find("author").text().replace(/\|/g,",");var c=$(this).find("description").text();var h=$(this).find("event_sdate").text();var p=$(this).find("start_date").text();var d=$(this).find("end_date").text();var v=$(this).find("thumb").text();var m=$(this).find("actual").text();$(this).find("thumb").each(function(){e=$(this).attr("length")});$(this).find("actual").each(function(){t=$(this).attr("length")});var g=new Array;var y=l.split(",");for(i=0;i<y.length;i++){g.push(y[i])}if(jQuery.inArray(s,eventItemId)==-1){eventItemId.push(s);var b=new Object;b.itemId=s;b.title=o;b.type=u;b.etime=a;b.icsfile=r;b.category=n;b.publishedDate=h;b.startDate=p;b.endDate=d;b.author=g;b.authorCount=f;b.description=c;b.thumb=v;b.thumbLength=e;b.actual=m;b.actualLength=t;b.thumbLoc="";b.actualLoc="";jsonData.events.push(b);var w=JSON.stringify(n);w=w.substring(1,w.length-1);var E,S,x;var T=w.length;E=0;while(T!==0&&S!=0&&w!=""){var N=w.split("|");S=w.indexOf("-")+1;E=w.indexOf("|");T=w.length;x=w.substring(0,S-1);$.each(jsonData.category,function(e,t){$.each(t.subCategory,function(e,t){for(var n=0;n<N.length;n++){var r=N[n].substring(0,N[n].lastIndexOf("-"));var i=N[n].substring(N[n].indexOf("-")+1,N[n].length);if(i==t.categoryid&&t.subCategoryName==x){t.event.push(s)}}})});if(E==-1){T=0}if(S==0){T=0}x=w.substring(E+1,w.length);w=x}}else{}}catch(C){var k="loadEventsRss - There was an error on this page.\n\n";k+="Error description: "+C.message+"\n\n";k+="Click OK to continue.\n\n";console.log(k)}});loadDocumentRss()}function loadDocumentRss(){$.ajax({type:"GET",url:documentRss,dataType:"xml",success:getDocumentItem,error:function(e,t,n){console.log("*******************************************************");console.log("In loadDocumentRss Failure"+JSON.stringify(e));console.log("textStatus:"+t+":"+n);console.log("*******************************************************")}})}function getDocumentItem(e){$(e).find("item").each(function(){try{var e,t,n;var r=$(this).find("category").text();var s=$(this).find("contentid").text();var o=$(this).find("title").text();o=o.replace(/'/g,"");var u=$(this).find("description").text();var a=$(this).find("content_type").text();formatTypeArr.push(a);formatTypeArr=$.unique(formatTypeArr);var f=$(this).find("Content_lang").text();var l=$(this).find("author").text().replace(/\|/g,",");var c=$(this).find("document_date").text();var h=$(this).find("thumb").text();var p=$(this).find("actual").text();var d=$(this).find("document_pdf").text();$(this).find("thumb").each(function(){n=$(this).attr("length")});$(this).find("thumb").each(function(){e=$(this).attr("length")});$(this).find("actual").each(function(){t=$(this).attr("length")});if(jQuery.inArray(s,documentItemId)==-1){documentItemId.push(s);var v=new Array;var m=l.split(",");for(i=0;i<m.length;i++){v.push(m[i])}var g=new Object;g.itemId=s;g.title=o;g.description=u;g.publishedDate=c;g.type=a;g.author=v;g.category=r;g.thumb=h;g.thumbLength=e;g.actual=p;g.actualLength=t;g.thumbLoc="";g.actualLoc="";g.pdf=d;g.spdfLength=n;g.isDownloaded="false";g.localPath="";g.downloadedDateD="";g.selLanguage=f;jsonData.documents.push(g);var y=JSON.stringify(r);y=y.substring(1,y.length-1);var b,w,E;var S=y.length;b=0;while(S!==0&&w!=0&&y!=""){var x=y.split("|");w=y.indexOf("-")+1;b=y.indexOf("|");S=y.length;E=y.substring(0,w-1);$.each(jsonData.category,function(e,t){$.each(t.subCategory,function(e,t){for(var n=0;n<x.length;n++){var r=x[n].substring(0,x[n].lastIndexOf("-"));var i=x[n].substring(x[n].indexOf("-")+1,x[n].length);if(i==t.categoryid&&t.subCategoryName==E){t.document.push(s)}}})});if(b==-1){S=0}if(w==0){S=0}E=y.substring(b+1,y.length);y=E}}else{}}catch(T){var N="getDocumentItem-There was an error on this page.\n\n";N+="Error description: "+T.message+"\n\n";N+="Click OK to continue.\n\n";console.log(N)}});loadContributorRss();isDataLoaded=true;if(isAppUpgradeAvailable==false){$.mobile.changePage("#businessCategory")}else if(isAppUpgradeAvailable==true&&setCancelAction==true){$.mobile.changePage("#businessCategory")}$("#imgRefreshProgress").hide()}function loadContributorRss(){$.ajax({type:"GET",url:contributorRss,dataType:"xml",success:loadContributorData,error:function(e,t,n){console.log("*******************************************************");console.log("In loadContributorRss Failure"+JSON.stringify(e));console.log("textStatus:"+t+":"+n);console.log("*******************************************************")}});loadSpotlightUrl();loadTechWatchUrl();loadFaqRss()}function loadContributorData(e){$(e).find("item").each(function(){try{var e=$(this).find("title").text();var t=$(this).find("guid").text();var n=$(this).find("category").text();var r=$(this).find("description").text();var i=$(this).find("contributor").text();var s=$(this).find("thumb").text();var o=$(this).find("actual").text();var u=$(this).find("date").text();var a=u.lastIndexOf("-");u=u.substring(0,a-1);var f=$(this).find("email").text();var l=new Object;l.itemId=t;l.title=e;l.category=n;l.description=r;l.contributor=i;l.date=u;l.type="contributor";l.email=f;l.thumb=s;l.actual=o;l.thumbLoc="";l.actualLoc="";jsonData.contributor.push(l)}catch(c){var h="loadContributorData-There was an error on this page.\n\n";h+="Error description: "+c.message+"\n\n";h+="Click OK to continue.\n\n";console.log(h)}});getFileSystemRefForWriting(jsonData)}function loadSpotlightUrl(){$.ajax({type:"GET",url:spotlightRss,dataType:"xml",success:loadSpotlightGeneral,error:function(e,t,n){console.log("********************** SPOTLIGHT *********************************");console.log("In loadSpotlightUrl Failure"+JSON.stringify(e));console.log("textStatus:"+t+":"+n);console.log("*******************************************************")}})}function loadSpotlightGeneral(e){$(e).find("item").each(function(){try{var e=$(this).find("contentid").text();var t=$(this).find("contenttype").text();var n=$(this).find("formattype").text();var r=$(this).find("category").text();var s=$(this).find("title").text();var o=$(this).find("description").text();var u=$(this).find("formatlang").text();var a=$(this).find("author").text().replace(/\|/g,",");var f=$(this).find("contributor_id").text();var l=$(this).find("author_count").text();var c=$(this).find("audio").text();var h=$(this).find("video").text();var p=$(this).find("transcript").text();var d=$(this).find("presentation").text();var v=$(this).find("qna").text();var m=$(this).find("etime").text();var g=$(this).find("document_pdf").text();var y=$(this).find("published_date_start").text();var b=y.length;var w=$(this).find("published_date_end").text();var E=$(this).find("contributor_id").text();var S=$(this).find("tech_area").text();var x=$(this).find("image_thumb").text();var T=$(this).find("image_actual").text();var N=$(this).find("special_ads").text();var C=$(this).find("special_ads").children("image").text();var k=$(this).find("special_ads").children("url").text();var L=$(this).find("special_ads").children("text").text();$(this).find("audio").each(function(){var e=$(this).attr("length")});$(this).find("video").each(function(){var e=$(this).attr("length")});$(this).find("transcript").each(function(){var e=$(this).attr("length")});$(this).find("presentation").each(function(){var e=$(this).attr("length")});var A=new Array;var O=a.split(",");for(i=0;i<O.length;i++){A.push(O[i])}var M=new Object;M.itemId=e;M.type=t;M.formattype=n;M.category=r;M.title=s;M.description=o;M.lang=u;M.author=A;M.authorCount=l;M.audio=c;M.video=h;M.transcript=p;M.presentation=d;M.qna=v;M.document=g;M.publishedDateStart=y;M.contId=f;M.publishedDateEnd=w;M.contributorId=E;M.techArea=S;M.thumb=x;M.actual=T;M.etime=m;M.thumbLoc="";M.actualLoc="";M.specialAds=N;M.saImage=C;M.saURL=k;M.saText=L;M.isDownloadedAudio="false";M.localPathAudio="";M.downloadedDateA="";M.isDownloadedVideo="false";M.localPathVideo="";M.downloadedDateV="";M.isDownloadedTranscript="false";M.localPathTranscript="";M.downloadedDateT="";M.isDownloadedPresentation="false";M.localPathPresentation="";M.downloadedDateP="";M.isDownloaded="false";M.localPath="";M.downloadedDateD="";jsonData.spotLight.push(M);var _=JSON.stringify(r);_=_.substring(1,_.length-1);var D,P,H;var B=_.length;D=0;while(B!==0&&P!=0&&_!=""){var j=_.split(",");P=_.indexOf("-")+1;D=_.indexOf(",");B=_.length;H=_.substring(0,P-1);$.each(jsonData.category,function(t,n){$.each(n.subCategory,function(t,n){for(var r=0;r<j.length;r++){var i=j[r].substring(0,j[r].lastIndexOf("-"));var s=j[r].substring(j[r].indexOf("-")+1,j[r].length);if(s==n.categoryid&&n.subCategoryName==H){n.spotlight.push(e)}}})});if(D==-1){B=0}if(P==0){B=0}H=_.substring(D+1,_.length);_=H}}catch(F){var I="There was an error on this page.\n\n";I+="Error description: "+F.message+"\n\n";I+="Click OK to continue.\n\n"}});if(isOnline){getFileSystemRefForReading(false,jsonData)}postDownloadedItem()}function loadFaqRss(){$.ajax({type:"GET",url:faqRss,dataType:"xml",success:loadFaq,error:function(e,t,n){console.log("******************* FAQ ************************************");console.log("In loadFaqRss Failure"+JSON.stringify(e));console.log("textStatus:"+t+":"+n);console.log("*******************************************************")}})}function loadFaq(e){$(e).find("item").each(function(){try{var e=$(this).find("title").text();var t=$(this).find("question_order").text();var n=$(this).find("description").text();var r=$(this).find("image1").text();var i=$(this).find("image2").text();var s=new Object;s.title=e;s.qOrder=t;s.sImage1=r;s.sImage2=i;s.description=n;jsonData.faq.push(s)}catch(o){var u="loadSpotlight-There was an error on this page.\n\n";u+="Error description: "+o.message+"\n\n";u+="Click OK to continue.\n\n";console.log(u)}});downloadThumbImagesOnLogin()}function loadAboutTechTimeRss(){$.ajax({type:"GET",url:aboutTechTimeRss,dataType:"xml",success:loadAboutTechTime,error:function(e,t,n){console.log("******************* ABOUT TECHTIME ************************************");console.log("In loadAboutTechTimeRss Failure"+JSON.stringify(e));console.log("textStatus:"+t+":"+n);console.log("*******************************************************")}})}function loadAboutTechTime(e){newAppVersion=$(e).find("androidAppVersion").text();var t=$(e).find("updateMessage").text();$("#customUpdateMessage").html(t);checkForApplicationUpgradeAvailability();$(e).find("item").each(function(){try{var e=$(this).find("title").text();var t=$(this).find("image").text();var n=$(this).find("description").text();var r=new Object;r.title=e;r.description=n;r.image=t;jsonData.aboutTechTime.push(r)}catch(i){var s="loadAboutTechTime-There was an error on this page.\n\n";s+="Error description: "+i.message+"\n\n";s+="Click OK to continue.\n\n";console.log(s)}})}function loadTechWatchUrl(){$.ajax({type:"GET",url:techWatchRss,dataType:"xml",success:loadTechWatchData,error:function(e,t,n){console.log("********************** Tech Watch *********************************");console.log("In Failure"+JSON.stringify(e));console.log("textStatus:"+t+":"+n);console.log("*******************************************************")}})}function loadTechWatchData(e){$(e).find("techwatch").each(function(e,t){try{var n=new Object;var r=$(this).attr("type");var i=$(this).attr("id");if(r=="current"){currentTechWatchItemId=i;currentTechWatchItemIndex=e;window.localStorage.setItem("currentTechWatchItemId",currentTechWatchItemId);window.localStorage.setItem("currentTechWatchItemIndex",currentTechWatchItemIndex)}n.type=r;n.twId=i;var s=new Array;$(this).find("item").each(function(){var e=new Array;var t=$(this).find("title").text();var n=$(this).find("type").text();var r=$(this).find("article");r.each(function(){var t=new Object;t.articleTitle=$(this).find("article_title").text();t.articleUrl=$(this).find("article_url").text();t.articleDescription=$(this).find("article_description").text();e.push(t)});var i=new Object;i.itemTitle=t;i.itemType=n;i.itemArticleArray=e;s.push(i)});n.itemSet=s;jsonData.techWatch.push(n)}catch(o){var u="loadTechWatchData-There was an error on this page.\n\n";u+="Error description: "+o.message+"\n\n";u+="Click OK to continue.\n\n";console.log(u)}})}function loadTechWatchDataNew(e){$(e).find("techwatch").each(function(e,t){try{var n=new Object;var r=$(this).attr("type");var i=$(this).attr("id");var s=$(this).attr("publishedDate");if(r=="current"){currentTechWatchItemId=i;currentTechWatchItemIndex=e;window.localStorage.setItem("currentTechWatchItemId",currentTechWatchItemId);window.localStorage.setItem("currentTechWatchItemIndex",currentTechWatchItemIndex)}n.type=r;n.twId=i;n.techWatchPublicationDate=s;n.techWatchPublicationIndex=e;n.techWatchPublicationDateString=getFormattedDate(s);var o=new Array;$(this).find("item").each(function(){var e=new Array;var t=$(this).find("title").text();var n=$(this).find("type").text();var r=$(this).find("article");r.each(function(){var t=new Object;t.articleTitle=$(this).find("article_title").text();t.articleUrl=$(this).find("article_url").text();t.articleDescription=$(this).find("article_description").text();e.push(t)});var i=new Object;i.itemTitle=t;i.itemType=n;i.itemArticleArray=e;o.push(i)});n.itemSet=o;jsonData.techWatch.push(n)}catch(u){var a="There was an error on this page.\n\n";a+="Error description: "+u.message+"\n\n";a+="Click OK to continue.\n\n"}});if(jsonData.techWatch.length==100){var t=new Date;d=t}}function getFormattedDate(e){var t=e.replace(/-/g,"/");var n=/(.*?)\/(.*?)\/(.*?)$/;var r=t.replace(n,function(e,t,n,r){var i=["January","February","March","April","May","June","July","August","September","October","November","December"];if(Math.floor(t/10)!=1){if(Math.floor(t%10)==1){return t+"st "+i[n-1]+", "+r}else if(Math.floor(t%10)==2){return t+"nd "+i[n-1]+", "+r}else if(Math.floor(t%10)==3){return t+"rd "+i[n-1]+", "+r}else{return t+"th "+i[n-1]+", "+r}}else{return t+"th "+i[n-1]+", "+r}});return r}function startThumbnailDownload(){var e="";e=jsonData;console.log("compare");compareAndUpdateJSON1(e)}function pendingDownloads(e){document.getElementById("showProgressBar").innerHTML="";$.each(e,function(e,t){var n=t.elementId;var r=t.elementTitle;var i=t.isDownloadedFlag;var s=t.elementAudio;var o=t.val;if(isOnline){downloadFile(n,r,i,s,o)}})}function showCategoriesListTT(e){var t="";if(e!=null){jsonData=e;changeDownloadLogoutColor();t=""}}function createJsonFormatOffline(e){jsonData=e;if(e!=null){noSubscribe="true";changeDownloadLoginColor();$("#imgRefreshProgress").hide()}else if(e==null||e=="null"||e==""){$("#errormsg").html("If you are accessing Tech Time mobile app for the first time, you will need to connect to the internet to view the content.<br> Please close the application and connect to Internet.");$.mobile.changePage("#errorPage")}}function downloadedListload(e,t,n,r,i,s){if(i==1){type="A"}else if(i==2){type="V"}else if(i==3){type="P"}else if(i==4){type="T"}else if(i==5){type="D"}var o=new Object;o.itemId=e;o.title=r;o.publishedDate="";o.type=type;o.author="";o.isDownloaded=n;o.localPath=s;o.val=i;downloadJson.finalDownload.push(o);if(isOnline){getFileSystemRefForWritingDownload(downloadJson)}}function downloadThumbImagesOnLogin(){$.each(jsonData.documents,function(e,t){if(downloadedThumbs.indexOf(t.itemId+"thumb.png")==-1){var n=new Object;n.itemId=t.itemId;n.url=t.thumb;n.type="thumb";jsonData.imagesToDownload.push(n)}if(downloadedThumbs.indexOf(t.itemId+"actual.png")==-1){var n=new Object;n.itemId=t.itemId;n.url=t.actual;n.type="actual";jsonData.imagesToDownload.push(n)}});$.each(jsonData.panelDiscussions,function(e,t){if(downloadedThumbs.indexOf(t.itemId+"thumb.png")==-1){var n=new Object;n.itemId=t.itemId;n.url=t.thumb;n.type="thumb";jsonData.imagesToDownload.push(n)}if(downloadedThumbs.indexOf(t.itemId+"actual.png")==-1){var n=new Object;n.itemId=t.itemId;n.url=t.actual;n.type="actual";jsonData.imagesToDownload.push(n)}});$.each(jsonData.interviews,function(e,t){if(downloadedThumbs.indexOf(t.itemId+"thumb.png")==-1){var n=new Object;n.itemId=t.itemId;n.url=t.thumb;n.type="thumb";jsonData.imagesToDownload.push(n)}if(downloadedThumbs.indexOf(t.itemId+"actual.png")==-1){var n=new Object;n.itemId=t.itemId;n.url=t.actual;n.type="actual";jsonData.imagesToDownload.push(n)}});$.each(jsonData.techConf,function(e,t){if(downloadedThumbs.indexOf(t.itemId+"thumb.png")==-1){var n=new Object;n.itemId=t.itemId;n.url=t.thumb;n.type="thumb";jsonData.imagesToDownload.push(n)}if(downloadedThumbs.indexOf(t.itemId+"actual.png")==-1){var n=new Object;n.itemId=t.itemId;n.url=t.actual;n.type="actual";jsonData.imagesToDownload.push(n)}});$.each(jsonData.technologySessions,function(e,t){if(downloadedThumbs.indexOf(t.itemId+"thumb.png")==-1){var n=new Object;n.itemId=t.itemId;n.url=t.thumb;n.type="thumb";jsonData.imagesToDownload.push(n)}if(downloadedThumbs.indexOf(t.itemId+"actual.png")==-1){var n=new Object;n.itemId=t.itemId;n.url=t.actual;n.type="actual";jsonData.imagesToDownload.push(n)}});$.each(jsonData.contributor,function(e,t){if(downloadedThumbs.indexOf(t.itemId+"actual.png")==-1){var n=new Object;n.itemId=t.itemId;n.url=t.actual;n.type="actual";jsonData.imagesToDownload.push(n)}});$.each(jsonData.events,function(e,t){if(downloadedThumbs.indexOf(t.itemId+"thumb.png")==-1){var n=new Object;n.itemId=t.itemId;n.url=t.thumb;n.type="thumb";jsonData.imagesToDownload.push(n)}if(downloadedThumbs.indexOf(t.itemId+"actual.png")==-1){var n=new Object;n.itemId=t.itemId;n.url=t.actual;n.type="actual";jsonData.imagesToDownload.push(n)}});$.each(jsonData.spotLight,function(e,t){if(downloadedThumbs.indexOf(t.itemId+"thumb.png")==-1){var n=new Object;n.itemId=t.itemId;n.url=t.thumb;n.type="thumb";jsonData.imagesToDownload.push(n)}if(downloadedThumbs.indexOf(t.itemId+"actual.png")==-1){var n=new Object;n.itemId=t.itemId;n.url=t.actual;n.type="actual";jsonData.imagesToDownload.push(n)}});if(jsonData.imagesToDownload.length!=0&&jsonData.imagesToDownload.length>0){downloadAllRequiredImages()}}function downloadAllRequiredImages(){downloadAllRequiredImagesLength=jsonData.imagesToDownload.length;var e=jsonData.imagesToDownload[downloadAllRequiredImagesCounter].itemId;var t=jsonData.imagesToDownload[downloadAllRequiredImagesCounter].url;var n=jsonData.imagesToDownload[downloadAllRequiredImagesCounter].type;if(n=="thumb"){downloadThumbImages(e,n,t)}else if(n=="actual"){downloadThumbImages(e,n,t)}}function downloadThumbImages(e,t,n){var r="";r=n;var i="";i=t;var s="";s="false";var o="";o="";var u=new FileTransfer;if(isOnline){if(device.platform=="Android"){r=encodeURI(r);o=sPath+"/images/"+e+t+".png"}else{r=r;o=sPath+"/images/"+e+t+".png";o=window.appRootDir.fullPath+"/images/"+e+t+".png"}if(r!=""){u.download(n,o,function(e){downloadAllRequiredImagesCounter=downloadAllRequiredImagesCounter+1;if(downloadAllRequiredImagesCounter<downloadAllRequiredImagesLength){downloadAllRequiredImages()}},function(e){downloadAllRequiredImagesCounter=downloadAllRequiredImagesCounter+1;if(downloadAllRequiredImagesCounter<downloadAllRequiredImagesLength){downloadAllRequiredImages()}})}}}var noSubscribe="false";var subscribeCatList="";var jsonData=new Object;var mainCategoryList=new Array;var audioListItem=new Array;var videoListItem=new Array;var eventListItem=new Array;var documentListItem=new Array;var contributorListItem=new Array;var downloadListItemLinks=new Array;var audioVideoItemId=new Array;var eventItemId=new Array;var documentItemId=new Array;var taggedId=new Array;var subscribeCategoryId=new Array;var isSubscribeDocument="no";var isSubscribePodcast="no";var isSubscribeEvent="no";var subscribeRss="https://techtime.accenture.com/techtimemobile/subscribe-service/uid=";var technologyAreaListUrl="https://techtime.accenture.com/techtimemobile/subscribe-service/all";var rssUrl="https://techtime.accenture.com/techno-areas/0/audio-video-listing-view";var documentRss="https://techtime.accenture.com/techno-areas/0/documents-listing-view";var eventsRss="https://techtime.accenture.com/techno-areas/0/events-listing-view";var contributorRss="https://techtime.accenture.com/mobile-contributor-listing.xml";var spotlightRss="https://techtime.accenture.com/mobile-spotlight-feeds.xml";var aboutTechTimeRss="https://techtime.accenture.com/mobile-about-us/aboutus.xml";var faqRss="https://techtime.accenture.com/mobile-faq-rss/faq.xml";var techWatchRss="https://techtime.accenture.com/mobile-tech-watch";var playlistsRSS="https://techtime.accenture.com/playlists.xml";var selectedCategoryId="";var selectedCategoryName="";var resFinal=new Array;var formatTypeArr=new Array;var currentTechWatchItemId="";var currentTechWatchItemIndex="";var techWatchTraverseIndex="";var downloadAllRequiredImagesCounter=0;var downloadAllRequiredImagesLength