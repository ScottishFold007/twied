Search.setIndex({envversion:47,filenames:["collection","eventdetection","guide","index","labelprop","locinf"],objects:{"twied.eventec":{clustercreator:[1,0,0,"-"],clustercreatorgrid:[1,0,0,"-"],clustermanager:[1,0,0,"-"],clusterupdater:[1,0,0,"-"],eventdetection:[1,0,0,"-"],popcount:[1,0,0,"-"]},"twied.eventec.clustercreator":{ClusterCreator:[1,3,1,""]},"twied.eventec.clustercreator.ClusterCreator":{add_unclustered:[1,1,1,""],process_tweet:[1,1,1,""]},"twied.eventec.clustercreatorgrid":{ClusterCreatorGrid:[1,3,1,""],GeoGrid:[1,3,1,""]},"twied.eventec.clustercreatorgrid.ClusterCreatorGrid":{add_unclustered:[1,1,1,""],process_tweet:[1,1,1,""]},"twied.eventec.clustercreatorgrid.GeoGrid":{add_tweet:[1,1,1,""],get_str:[1,5,1,""],get_surrounding:[1,1,1,""],remove_tweet:[1,1,1,""]},"twied.eventec.clustermanager":{ClusterManager:[1,3,1,""],Coordinate:[1,3,1,""],TweetCluster:[1,3,1,""]},"twied.eventec.clustermanager.ClusterManager":{add_cluster:[1,1,1,""],get_all_clusters:[1,1,1,""],get_coordinate:[1,1,1,""],merge_clusters:[1,1,1,""],remove_cluster:[1,1,1,""]},"twied.eventec.clustermanager.Coordinate":{get:[1,1,1,""],rev:[1,1,1,""]},"twied.eventec.clustermanager.TweetCluster":{add_tweet:[1,1,1,""],as_dict:[1,1,1,""],get_points:[1,1,1,""],in_cluster:[1,1,1,""],merge:[1,1,1,""]},"twied.eventec.clusterupdater":{ClusterUpdater:[1,3,1,""]},"twied.eventec.clusterupdater.ClusterUpdater":{add_done_comp:[1,1,1,""],has_comp:[1,1,1,""],process_tweet:[1,1,1,""],update_clusters:[1,1,1,""],update_oldclusters:[1,1,1,""]},"twied.eventec.eventdetection":{EventDetection:[1,3,1,""]},"twied.eventec.eventdetection.EventDetection":{get_all_clusters:[1,1,1,""],get_clusters:[1,1,1,""],get_unclustered:[1,1,1,""],get_unclustered_points:[1,1,1,""],process_tweet:[1,1,1,""]},"twied.eventec.popcount":{PopMap:[1,3,1,""]},"twied.eventec.popcount.PopMap":{get_cell:[1,1,1,""],get_ll:[1,1,1,""],get_population:[1,1,1,""],get_reqfunc_uk:[1,1,1,""]},"twied.labelprop":{distance:[4,0,0,"-"],inference:[4,0,0,"-"]},"twied.labelprop.distance":{geometric_mean:[4,4,1,""]},"twied.labelprop.inference":{InferSL:[4,3,1,""],SLNetwork:[4,3,1,""]},"twied.labelprop.inference.InferSL":{get_connections:[4,1,1,""],get_location:[4,1,1,""],get_network:[4,1,1,""],get_user:[4,1,1,""],infer:[4,1,1,""],log:[4,1,1,""]},"twied.multiind":{inference:[5,0,0,"-"],polystacker:[5,0,0,"-"]},"twied.multiind.indicators":{coordinateindicator:[5,0,0,"-"],geotagindicator:[5,0,0,"-"],gislocfieldindicator:[5,0,0,"-"],indicator:[5,0,0,"-"],locfieldindicator:[5,0,0,"-"],messageindicator:[5,0,0,"-"],tzindicator:[5,0,0,"-"]},"twied.multiind.indicators.coordinateindicator":{CoordinateIndicator:[5,3,1,""]},"twied.multiind.indicators.coordinateindicator.CoordinateIndicator":{get_loc:[5,1,1,""],regex:[5,6,1,""]},"twied.multiind.indicators.geotagindicator":{GeotagIndicator:[5,3,1,""]},"twied.multiind.indicators.geotagindicator.GeotagIndicator":{get_loc:[5,1,1,""]},"twied.multiind.indicators.gislocfieldindicator":{GISLocFieldIndicator:[5,3,1,""],GisgraphyException:[5,2,1,""]},"twied.multiind.indicators.gislocfieldindicator.GISLocFieldIndicator":{get_loc:[5,1,1,""],get_polys:[5,1,1,""]},"twied.multiind.indicators.indicator":{Indicator:[5,3,1,""]},"twied.multiind.indicators.indicator.Indicator":{get_weight:[5,1,1,""],point_to_poly:[5,1,1,""]},"twied.multiind.indicators.locfieldindicator":{GeonamesException:[5,2,1,""],LocFieldIndicator:[5,3,1,""]},"twied.multiind.indicators.locfieldindicator.LocFieldIndicator":{get_loc:[5,1,1,""]},"twied.multiind.indicators.messageindicator":{MessageIndicator:[5,3,1,""]},"twied.multiind.indicators.messageindicator.MessageIndicator":{get_loc:[5,1,1,""]},"twied.multiind.indicators.tzindicator":{TZIndicator:[5,3,1,""]},"twied.multiind.indicators.tzindicator.TZIndicator":{get_loc:[5,1,1,""]},"twied.multiind.inference":{Indicators:[5,3,1,""],InferThread:[5,3,1,""]},"twied.multiind.inference.InferThread":{add_ind:[5,1,1,""],infer:[5,1,1,""],process_tweet:[5,1,1,""]},"twied.multiind.interfaces":{dbinterfaces:[5,0,0,"-"],webinterfaces:[5,0,0,"-"]},"twied.multiind.interfaces.dbinterfaces":{CountryPolyInterface:[5,3,1,""],GADMPolyInterface:[5,3,1,""],TZPolyInterface:[5,3,1,""],proc_polystr:[5,4,1,""]},"twied.multiind.interfaces.dbinterfaces.CountryPolyInterface":{destroy:[5,1,1,""],get_polys:[5,1,1,""]},"twied.multiind.interfaces.dbinterfaces.GADMPolyInterface":{destroy:[5,1,1,""],get_polys:[5,1,1,""]},"twied.multiind.interfaces.dbinterfaces.TZPolyInterface":{destroy:[5,1,1,""],get_polys:[5,1,1,""],get_polys_america:[5,1,1,""],get_polys_offset:[5,1,1,""]},"twied.multiind.interfaces.webinterfaces":{DBPInterface:[5,3,1,""],DBPSpotlightException:[5,2,1,""],DBPSpotlightInterface:[5,3,1,""],GeonamesDecodeException:[5,2,1,""],GeonamesInterface:[5,3,1,""],GisgraphyInterface:[5,3,1,""],filter_emoji:[5,4,1,""],req_using_pool:[5,4,1,""]},"twied.multiind.interfaces.webinterfaces.DBPInterface":{destroy:[5,1,1,""],extract_name:[5,1,1,""],req:[5,1,1,""]},"twied.multiind.interfaces.webinterfaces.DBPSpotlightInterface":{destroy:[5,1,1,""],req:[5,1,1,""]},"twied.multiind.interfaces.webinterfaces.GeonamesInterface":{destroy:[5,1,1,""],req:[5,1,1,""]},"twied.multiind.interfaces.webinterfaces.GisgraphyInterface":{destroy:[5,1,1,""],req:[5,1,1,""]},"twied.multiind.polystacker":{coord2grid:[5,4,1,""],find_bounds:[5,4,1,""],generate_polygon:[5,4,1,""],get_highest:[5,4,1,""],grid2coord:[5,4,1,""],infer_location:[5,4,1,""],plot_area:[5,4,1,""]},"twied.twicol":{collection:[0,0,0,"-"],counters:[0,0,0,"-"],exception_repeat:[0,4,1,""]},"twied.twicol.collection":{TweetStreamer:[0,3,1,""]},"twied.twicol.collection.TweetStreamer":{on_error:[0,1,1,""],on_success:[0,1,1,""],on_timeout:[0,1,1,""],run:[0,1,1,""],stop:[0,1,1,""]},"twied.twicol.counters":{CounterThread:[0,3,1,""]},"twied.twicol.counters.CounterThread":{run:[0,1,1,""],stop:[0,1,1,""]},twied:{eventec:[1,0,0,"-"],labelprop:[4,0,0,"-"],twicol:[0,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","method","Python method"],"2":["py","exception","Python exception"],"3":["py","class","Python class"],"4":["py","function","Python function"],"5":["py","staticmethod","Python static method"],"6":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:method","2":"py:exception","3":"py:class","4":"py:function","5":"py:staticmethod","6":"py:attribute"},terms:{"0b0xozyj_tg1ayvhvntrlrgrilw8":2,"10km":1,"__main__":2,"__name__":2,"_id":2,"_section":2,"boolean":[1,4],"break":2,"class":[0,1,2,4,5],"default":[1,2,4,5],"enum":5,"final":[2,5],"float":[1,5],"function":[0,1,2,4,5],"import":2,"int":1,"long":[1,5],"new":1,"return":[1,2,4,5],"short":0,"static":1,"throw":[0,5],"true":[1,2,4,5],"try":2,"while":[1,2,4],about:[1,2,4],access:[1,5],account:2,act:5,activ:1,add:1,add_clust:1,add_done_comp:1,add_ind:5,add_tweet:1,add_unclust:1,address:[2,5],administr:5,after:[0,1],algorithm:2,all:[0,1,2,5],allc:2,allow:1,along:1,alongsid:5,also:[0,1,2,5],alter:[1,2],altern:1,american:5,amount:1,ani:[1,3],annot:2,api:[0,2,4,5],api_set:[0,2],app:2,app_kei:[0,2],app_secret:[0,2],append:1,approach:2,area:[1,5],argument:0,around:[4,5],arrai:5,arriv:1,as_dict:[1,2],asc:[1,2],ascend:[1,2],ascii:1,assum:1,attempt:[1,4],attemt:2,authent:2,author:2,automat:2,back:[0,1,5],backup:2,base:[1,2,5],basic:2,becaus:2,been:[1,2,4],befor:[1,5],belief:5,below:[0,2],between:[0,1],blob:2,bool:[1,5],border:5,both:[1,2],bottom:5,bound:5,breakdown:2,broken:2,calcul:[1,4],call:[0,5],callback:[0,2],can:[0,1,2,5],cannot:[1,2,5],carr:2,caught:2,cdict:1,cell:1,cell_lat:1,cell_lon:1,center:1,centr:[1,2],certain:[1,5],charact:5,check:[0,1],choos:1,circular:5,clat:1,client:2,clon:1,clone:2,close:[1,2,5],clsman:1,cluster_maxag:1,cluster_radiu:1,cluster_timediff:1,clustercr:1,clustercreatorgrid:1,clustermanag:1,clusterupdat:1,cod:2,code:[2,5],col:2,coltest1:2,com:[2,5],compar:1,comparison:1,compil:2,complet:2,compon:2,concurr:2,confid:5,config:[2,4,5],configpars:[2,5],connect:[2,4,5],consol:4,contact:[3,5],contain:[1,2,4,5],containt:2,content:3,continu:[2,4],contour:5,coord2grid:5,coord:[1,5],coordin:[1,2,4,5],coordinateind:5,core:5,correct:2,correctli:[1,2],could:5,count:[0,1,2],counterthread:[0,2],countri:[2,5],countrypolyinterfac:5,creat:[0,1,2,5],create_index:2,creation:1,critic:2,csv:2,current:[1,5],cursor:2,data:[0,1,4,5],databas:[0,2,5],datetim:1,dbcol:5,dbcollect:4,dbinterfac:5,dbloc:5,dbpedia:[2,5],dbpediaspotlight:5,dbpinterfac:5,dbpspotlightexcept:5,dbpspotlightinterfac:5,decid:1,decod:5,decor:0,def:[0,2],degre:5,delai:[0,2,5],delet:1,delimit:1,demo:5,densiti:1,depend:1,depth:4,describ:1,design:2,destroi:5,determin:[1,5],diagram:5,dicationari:1,dict:1,dictionari:[0,1],did:1,differ:[1,5],directli:2,directori:2,dissert:2,distanc:4,district:5,doc:2,document:[0,1],doe:1,dot:1,doubl:5,down:2,download:2,draw:5,drive:2,due:2,dump:2,dure:1,each:[0,1,2,5],effici:1,either:1,emoji:5,empti:2,encompass:5,enough:4,ensur:1,entri:1,error:[0,1,2,5],estim:5,eventclust:1,eventdetect:[1,2],ever:2,everi:[0,2,5],evet:1,exact:1,examin:1,exampl:[0,1],except:[0,1,2,5],exception_repeat:0,exist:[1,5],exit:2,expir:1,exponenti:0,extend:4,extra:2,extract:5,extract_nam:5,failur:5,fals:[1,4,5],fast:1,faster:1,featur:5,fed:1,feed:2,feel:3,field:[1,2,5],file:[1,2],filenam:1,filter:5,filter_emoji:5,find:[1,2,4,5],find_bound:5,finish:[0,1,2],first:1,focus:1,follow:0,form:[1,5],format:[1,2],found:[2,4,5],frame:1,free:3,from:[0,1,2,4,5],func:0,further:[2,4],fuzzi:2,gadm_polydb_path:2,gadmpoli:5,gadmpolyinterfac:5,gain:0,gazet:5,gazett:5,gener:[4,5],generate_polygon:5,geo:[1,2],geodi:4,geofield:5,geograph:1,geogrid:1,geometr:[],geometric_mean:4,geonam:[2,5],geonamesdecodeexcept:[2,5],geonamesexcept:[2,5],geonamesinterfac:5,geotag:[2,4,5],geotagind:5,get:[1,2,4,5],get_all_clust:[1,2],get_cel:1,get_clust:1,get_connect:4,get_coordin:1,get_highest:5,get_ll:1,get_loc:[4,5],get_network:4,get_point:1,get_poli:5,get_polys_america:5,get_polys_offset:5,get_popul:1,get_reqfunc_uk:1,get_str:1,get_surround:1,get_unclust:1,get_unclustered_point:1,get_us:4,get_weight:5,getint:2,gisgraphi:5,gisgraphyexcept:5,gisgraphyinterfac:5,gislocfieldind:5,git:2,github:[2,3],given:1,glds15ag:[1,2],global:[1,2],gn_1:2,gn_2:2,gn_3:2,googl:2,got:2,greater:1,grid2coord:5,grow:0,handl:[0,2],happen:1,has_comp:1,have:[1,2,5],height:5,here:2,hidegeo:4,higest:5,highest:5,hold:1,host:5,hour:1,how:[2,3,5],howev:[2,5],http:[2,5],humph:2,humpheh:[2,3],imag:2,impact:5,implement:[1,2,4],in_clust:1,includ:[1,2],incorrect:2,indentifi:0,index:[1,2,3],indic:[],inf:2,inf_id:[2,5],inf_nam:2,infer:[],infer_loc:5,inferac:5,infersl:[2,4],inferthread:[2,5],info:2,inform:[0,1,2,4,5],ini:2,inid:5,initi:0,initialis:[0,1,4,5],input:2,insert:0,insert_id:0,insertid:0,instanc:[1,4],instead:[0,1,5],integ:[1,2],interfac:1,interv:0,interval_:0,issu:[1,5],json:5,kaisser:1,kei:1,kwarg:0,label:[2,4],labelprop:[],lambda:[1,2],larg:1,larger:1,largest:5,last:[0,1,2,5],lat:[1,5],latest:1,latitud:1,layout:2,least:4,left:[0,5],less:[1,5],level:1,lift:2,like:2,limit:[2,5],link:2,list:[0,1,4,5],listen:2,load:[1,2],loc:2,local:5,localhost:2,locat:[1,4],locfieldind:[2,5],locinf:[2,5],log:[0,2,4],logarithm:1,lon:[1,5],longitud:1,look:3,loop:0,lowest:1,mai:[0,2,5],main:[0,1,2],maintweet:1,manag:[1,5],managa:1,manual:5,map:[1,5],mask:5,master:2,matrix:5,max:2,max_depth:2,max_iter:2,maxag:1,maximum:[1,5],maxretryerror:2,mdcnt:1,mean:1,median:1,mediancount:1,mention:4,merg:1,merge_clust:1,messag:[2,3,4,5],messageind:5,method:1,mi_weight:2,min:2,min_ment:2,mincnt:1,mincount:1,minimum:1,minut:1,mongo:[0,2],mongocli:2,mongodb:[0,2,4,5],monitor:1,more:[0,1,2],most:1,mu3r4yi2hgdrabbma2syppovfocwfxauiikmeysx8ard80lr53:2,multi:[],multiind:[],multipl:[1,5],must:[1,2],mycol:2,name:[0,2,5],nearbi:1,need:[1,2,5],neighbour:1,ness:2,netw:4,network:4,newest:1,next:0,ninfer:2,nnext:2,no_cursor_timeout:2,non:1,none:[0,1,2,5],nooptionerror:2,normal:5,note:[0,1,2],num_timelin:2,number:[0,1,2,5],numpi:5,oauth_token:[0,2],oauth_token_secret:[0,2],object:[1,2,4,5],obtain:2,off:[1,2],offset:5,old:1,older:1,omit:2,on_add:0,on_error:0,on_success:0,on_timeout:0,onc:1,onli:[0,1],onto:5,open:[2,5],oper:2,option:[0,1,5],order:[1,2,4],org:[2,5],origin:2,other:[1,2,5],otherwis:[1,5],ouput:2,out:[0,5],output:[2,4],output_filenam:2,outright:2,overlap:1,overloadw:5,overrid:5,own:[2,5],packag:[2,3,5],pad:5,page:[3,5],paper:2,parallel:5,param:5,paramet:[0,1,2,4,5],pass:[0,1,2,5],per:5,perform:[0,1,5],period:1,pickl:2,pip:2,pkl:2,pkl_file:2,place:[1,5],planet:1,plot:5,plot_area:5,point:[1,4,5],point_to_poli:5,poli:5,polt:5,polydb_2:2,polygon:[],polystack:5,pool:5,popcount:1,popfunc:1,popmap:1,popmaploc:[1,2],port:2,posit:1,possibl:1,post:[1,3],precompil:2,prerequisit:2,previou:[0,2],primarili:1,print:[0,2],problem:2,proc_id:[2,5],proc_polystr:5,process:[1,2,5],process_tweet:[1,2,5],profil:4,propag:[2,4],propos:1,provid:1,ptweet:2,put:0,pymongo:2,python:2,queri:[2,5],question:3,quickli:1,radiu:[1,5],radius:1,rais:[1,2],reach:1,read:2,reason:1,recent:1,reciev:[0,2],recov:5,recurs:4,regardless:1,regex:5,reimplement:5,relat:5,remov:1,remove_clust:1,remove_tweet:1,repositori:2,repres:[1,5],req:5,req_loc:2,req_using_pool:5,request:5,requir:[1,2],resolut:5,respect:0,rest:[1,2],result:[2,5],retri:[0,5],retriev:[1,2,5],rev:1,revers:1,right:5,round:1,run:[0,2],same:1,save:[1,2],scale:5,screen_nam:2,search:[0,2,3,5],search_str:2,sec:2,second:[0,1,2,5],section:[2,5],sedac:1,see:[0,1,2,3],seen:2,select:[2,5],send:2,sent:2,seper:[1,2],servic:[2,5],set:[0,1,2,5],setup:[1,2,4,5],should:[0,1,2],show:[0,2],silent:1,simpl:[1,5],simultan:[2,5],sinc:1,singl:[0,1,5],sleep:2,slinf:2,slnetwork:4,slow:2,sngk3nmghszdjlcjgrtawqq3xymait0bvq6hvvv:2,some:[1,5],sort:2,sourc:[0,1,2,4,5],spatial:[1,2,4],specif:4,specifi:0,split:2,spotlight:[2,5],spotlight_pag:2,spotlight_port:2,spotlight_url:2,sqlite3:5,squar:5,stack:5,stacker:[],start:[0,1,2,3,5],statu:[2,5],status_cod:0,step:2,still:1,stop:[0,2],storag:[0,1],store:[0,1,2,4,5],str:[0,1,2],stream:[0,1],streamer:[0,2],string:[0,1,2,5],structur:1,successfulli:[0,2],suggest:[0,2,4],support:[1,2],surrond:4,surround:1,system:1,sztaki:2,tabl:[],tag:[2,5],take:[0,1,5],target:2,task:[2,5],techniqu:[1,5],tempor:1,test:[0,1,2,4,5],text:5,than:1,thei:[1,2],them:[0,1,2,5],thi:[0,1,2,4,5],those:1,thread:0,three:[0,1],threshold:1,through:[1,5],thrown:[1,5],time:[0,1,2],timedelta:1,timediff:1,timefram:1,timeout:0,timestamp:[1,2],timestamp_obj:1,timezon:[2,5],tld:[2,5],tld_csv:2,togeth:1,too:1,top:5,toponym:5,topoynm:5,trackstr:0,translat:[1,5],tsfield:1,tupl:[1,4,5],turn:5,tweet:[0,1,2,4,5],tweet_col:2,tweet_id:1,tweetclust:1,tweetfunc:[2,5],tweetint:[2,5],tweetstr:2,tweetstream:[0,2],tweetthread:0,twhen:5,two:[1,2],twt:5,twython:[0,2],twythonerror:2,twythonstream:0,txt:2,type:[1,2,5],tzindic:5,tzoffsetind:5,tzpolyinterfac:5,unclust:1,under:2,uniqu:2,until:4,updat:1,update_clust:1,update_oldclust:1,update_on:2,update_statu:2,url:[2,5],urllib3:2,usag:[0,1,2],user:[2,4,5],user_col:2,user_id:4,valid:2,valu:[1,2,5],variou:2,verbos:[2,4],version:[1,2],via:2,vincenti:4,wait:2,walther:1,webinterfac:[2,5],websit:5,websiteind:5,weight:[2,5],well:1,were:1,wether:5,what:1,when:[0,1,2,5],where:[1,5],whether:1,which:[0,1,2,4,5],within:[1,2],without:[2,4,5],word:2,work:[1,2,4],worker:2,world:[1,5],worldwid:1,would:[2,5],wrap:0,write:5,written:[0,5],wrong:1,ws_1:2,www:5,wyhfs6g9fqvnxywt53unucxt0:2,x0fasasjehqssvlaz3h6sqclpwtt54tcm78w8ploj1blv:2,you:2,your:2},titles:["2. <code class=\"docutils literal\"><span class=\"pre\">twied.twicol</span></code> &#8212; Twitter Collection","4. <code class=\"docutils literal\"><span class=\"pre\">twied.eventec</span></code> &#8212; Event Detection","1. Guide","Welcome to <cite>twied</cite>&#8216;s documentation!","5. <code class=\"docutils literal\"><span class=\"pre\">twied.labelprop</span></code> &#8212; SLP Inference Method","3. <code class=\"docutils literal\"><span class=\"pre\">twied.multiind</span></code> &#8212; Multi-Indicator Location Inference"],titleterms:{cluster:1,collect:[0,2],configur:2,counter:0,detect:[1,2],document:3,event:[1,2],eventec:1,exampl:2,geometr:4,grid:1,guid:2,indic:[3,5],infer:[4,5],instal:2,interfac:5,labelprop:4,locat:5,mean:4,method:4,modul:1,multi:5,multiind:5,polygon:5,popul:1,script:2,slp:[2,4],stacker:5,system:2,tabl:3,thread:5,twi:[0,1,3,4,5],twicol:0,twitter:0,welcom:3}})