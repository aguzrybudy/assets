window.emoticonx=(function(){var b=function(m){var j=m||{},l=j.emoRange||"#comments p, div.emoWrap",k=j.putEmoAbove||"iframe#comment-editor",h=j.topText||"",a=j.emoMessage||"Type a space then click on emoticon to retrieve code.",b=j.bottomText||"";s=j.middleText||"";$(k).before('<div style="text-align:left; font-size:16px; color:#cccccc; height:140px; overflow:auto; overflow-x:hidden;" class="emoWrap"><em>'+h+"</em>"+s+":blush: :sweat_smile: :laughing: :grin: :joy: :sunglasses: :heart_eyes: :kissing_heart: :kissing: :kissing_smiling_eyes: :kissing_closed_eyes: :128578: :129303: :innocent: :129299: :129300: :neutral_face: :expressionless: :no_mouth: :128580: :smirk: :128547: :128549: :128558: :129296: :hushed: :sleepy: :tired_face: :sleeping: :relieved: :stuck_out_tongue: :stuck_out_tongue_winking_eye: :stuck_out_tongue_closed_eyes: :unamused: :sweat: :128532: :confused: :128579: :129297: :astonished: :mask: :129298: :129301: :9785: :128577: :confounded: :128542: :worried: :triumph: :cry: :sob: :frowning: :anguished: :fearful: :weary: :grimacing: :cold_sweat: :scream: :flushed: :128565: :rage: :angry: :smiling_imp: :imp: :japanese_ogre: :skull: :9760a: :9760b: :ghost: :alien: :128169: :see_no_evil: :hear_no_evil: :speak_no_evil: msee :muscle: :128073: :128072: :9757: :up: :middle: :128071: :9996: :128406: :129304: :128400: :9995: :128076: :128077: :128078: :9994: :128074: :clap: :eyes: :eyeball: :tongue: :lips: :kiss: :cupid: :heart: :heartbeat: :brokenheart: :twohearts: :sparklingheart: :heartpulse: :blueheart: :greenheart: :yellowheart: :128156: :revolvingheart: :zzz: :bomb: :africa: :americas: :asia: :art: :127771: :sunny: :fullmoon: :facesun: :127919: :127922: :spades: :cardshearts: :9830: :clubs: :football: :128330: :9774: :9775: :127808: :9752: <br /><sub><b>"+a+"</b><br />"+b+"</sub></div>");var i=function(c,d,e){$(l).each(function(){$(this).html($(this).html().replace(/<br>:/g,"<br /> :").replace(/<br>;/g,"<br> ;").replace(/<br>=/g,"<br> =").replace(/<br>\^/g,"<br> ^").replace(c," <img style='max-height:24px' src='"+d+"' class='emo delayLoad' alt='"+e+"' />"))})};i(/\s:\)+/g,"http://edwardtbabinski.us/related-content/vu/01.png",":)");i(/\s:-\)+/g,"http://edwardtbabinski.us/related-content/vu/02.png",":-)");i(/\s:\)\)+/g,"http://edwardtbabinski.us/related-content/vu/03.png",":))");i(/\s=\)\)+/g,"http://edwardtbabinski.us/related-content/vu/03a.png","=))");i(/\s;\(+/g,"http://edwardtbabinski.us/related-content/vu/04.png",";(");i(/\s;-\(+/g,"http://edwardtbabinski.us/related-content/vu/05.png",";-(");i(/\s;\(\(+/g,"http://edwardtbabinski.us/related-content/vu/06.png",";((");i(/\s:d/ig,"http://edwardtbabinski.us/related-content/vu/07.png",":d");i(/\s:-d/ig,"http://edwardtbabinski.us/related-content/vu/08.png",":-d");i(/\s@-\)+/g,"http://edwardtbabinski.us/related-content/vu/09.png","@-)");i(/\s:p/ig,"http://edwardtbabinski.us/related-content/vu/10.png",":p");i(/\s:o/ig,"http://edwardtbabinski.us/related-content/vu/11.png",":o");i(/\s:&gt;\)+/g,"http://edwardtbabinski.us/related-content/vu/12.png",":&gt;)");i(/\s\(o\)+/ig,"http://edwardtbabinski.us/related-content/vu/13.png","(o)");i(/\s\[-\(+/g,"http://edwardtbabinski.us/related-content/vu/14.png","[-(");i(/\s:-\?/g,"http://edwardtbabinski.us/related-content/vu/15.png",":-?");i(/\s\(p\)+/ig,"http://edwardtbabinski.us/related-content/vu/16.png","(p)");i(/\s:-s/ig,"http://edwardtbabinski.us/related-content/vu/17.png",":-s");i(/\s\(m\)+/ig,"http://edwardtbabinski.us/related-content/vu/18.png","(m)");i(/\s8-\)+/ig,"http://edwardtbabinski.us/related-content/vu/19.png","8-)");i(/\s:-t/ig,"http://edwardtbabinski.us/related-content/vu/20.png",":-t");i(/\s:-b/ig,"http://edwardtbabinski.us/related-content/vu/21.png",":-b");i(/\sb-\(+/ig,"http://edwardtbabinski.us/related-content/vu/22.png","b-(");i(/\s:-#/ig,"http://edwardtbabinski.us/related-content/vu/23.png",":-#");i(/\s=p~/ig,"http://edwardtbabinski.us/related-content/vu/24.png","=p~");i(/\s\$-\)+/ig,"http://edwardtbabinski.us/related-content/vu/25.png","$-)");i(/\s\(b\)+/ig,"http://edwardtbabinski.us/related-content/vu/26.png","(b)");i(/\s\(f\)+/ig,"http://edwardtbabinski.us/related-content/vu/27.png'","(f)");i(/\sx-\)+/ig,"http://edwardtbabinski.us/related-content/vu/28.png","x-)");i(/\s\(k\)+/ig,"http://edwardtbabinski.us/related-content/vu/29.png","(k)");i(/\s\(h\)+/ig,"http://edwardtbabinski.us/related-content/vu/30.png","(h)");i(/\s\(c\)+/ig,"http://edwardtbabinski.us/related-content/vu/31.png","(c)");i(/\smsee/ig,"http://edwardtbabinski.us/related-content/vu/32.png","msee");i(/\s:grinning:/ig,"http://edwardtbabinski.us/related-content/vu/128512.png",":grinning:");i(/\s:grin:/ig,"http://edwardtbabinski.us/related-content/vu/128513.png",":grin:");i(/\s:joy:/ig,"http://edwardtbabinski.us/related-content/vu/128514.png",":joy:");i(/\s:smiley:/ig,"http://edwardtbabinski.us/related-content/vu/128515.png",":smiley:");i(/\s:smile:/ig,"http://edwardtbabinski.us/related-content/vu/128516.png",":smile:");i(/\s:sweat_smile:/ig,"http://edwardtbabinski.us/related-content/vu/128517.png",":sweat_smile:");i(/\s:laughing:/ig,"http://edwardtbabinski.us/related-content/vu/128518.png",":laughing:");i(/\s:wink:/ig,"http://edwardtbabinski.us/related-content/vu/128521.png",":wink:");i(/\s:blush:/ig,"http://edwardtbabinski.us/related-content/vu/128522.png",":blush:");i(/\s:yum:/ig,"http://edwardtbabinski.us/related-content/vu/128523.png",":yum:");i(/\s:sunglasses:/ig,"http://edwardtbabinski.us/related-content/vu/128526.png",":sunglasses:");i(/\s:heart_eyes:/ig,"http://edwardtbabinski.us/related-content/vu/128525.png",":heart_eyes:");i(/\s:kissing_heart:/ig,"http://edwardtbabinski.us/related-content/vu/128536.png",":kissing_heart:");i(/\s:kissing:/ig,"http://edwardtbabinski.us/related-content/vu/128535.png",":kissing:");i(/\s:kissing_smiling_eyes:/ig,"http://edwardtbabinski.us/related-content/vu/128537.png",":kissing_smiling_eyes:");i(/\s:kissing_closed_eyes:/ig,"http://edwardtbabinski.us/related-content/vu/128538.png",":kissing_closed_eyes:");i(/\s:relaxed:/ig,"http://edwardtbabinski.us/related-content/vu/9786.png",":relaxed:");i(/\s:128578:/ig,"http://edwardtbabinski.us/related-content/vu/128578.png",":128578:");i(/\s:129303:/ig,"http://edwardtbabinski.us/related-content/vu/129303.png",":129303:");i(/\s:innocent:/ig,"http://edwardtbabinski.us/related-content/vu/128519.png",":innocent:");i(/\s:129299:/ig,"http://edwardtbabinski.us/related-content/vu/129299.png",":129299:");i(/\s:129300:/ig,"http://edwardtbabinski.us/related-content/vu/129300.png",":129300:");i(/\s:neutral_face:/ig,"http://edwardtbabinski.us/related-content/vu/128528.png",":neutral_face:");i(/\s:expressionless:/ig,"http://edwardtbabinski.us/related-content/vu/128529.png",":expressionless:");i(/\s:no_mouth:/ig,"http://edwardtbabinski.us/related-content/vu/128566.png",":no_mouth:");i(/\s:128580:/ig,"http://edwardtbabinski.us/related-content/vu/128580.png",":128580:");i(/\s:128547:/ig,"http://edwardtbabinski.us/related-content/vu/128547.png",":128547:");i(/\s:128549:/ig,"http://edwardtbabinski.us/related-content/vu/128549.png",":128549:");i(/\s:128558:/ig,"http://edwardtbabinski.us/related-content/vu/128558.png",":128558:");i(/\s:smirk:/ig,"http://edwardtbabinski.us/related-content/vu/128527.png",":smirk:");i(/\s:129296:/ig,"http://edwardtbabinski.us/related-content/vu/129296.png",":129296:");i(/\s:hushed:/ig,"http://edwardtbabinski.us/related-content/vu/128559.png",":hushed:");i(/\s:sleepy:/ig,"http://edwardtbabinski.us/related-content/vu/128554.png",":sleepy:");i(/\s:tired_face:/ig,"http://edwardtbabinski.us/related-content/vu/128555.png",":tired_face:");i(/\s:sleeping:/ig,"http://edwardtbabinski.us/related-content/vu/128564.png",":sleeping:");i(/\s:relieved:/ig,"http://edwardtbabinski.us/related-content/vu/128524.png",":relieved:");i(/\s:stuck_out_tongue:/ig,"http://edwardtbabinski.us/related-content/vu/128539.png",":stuck_out_tongue:");i(/\s:stuck_out_tongue_winking_eye:/ig,"http://edwardtbabinski.us/related-content/vu/128540.png",":stuck_out_tongue_winking_eye:");i(/\s:stuck_out_tongue_closed_eyes:/ig,"http://edwardtbabinski.us/related-content/vu/128541.png",":stuck_out_tongue_closed_eyes:");i(/\s:unamused:/ig,"http://edwardtbabinski.us/related-content/vu/128530.png",":unamused:");i(/\s:sweat:/ig,"http://edwardtbabinski.us/related-content/vu/128531.png",":sweat:");i(/\s:128532:/ig,"http://edwardtbabinski.us/related-content/vu/128532.png",":128532:");i(/\s:confused:/ig,"http://edwardtbabinski.us/related-content/vu/128533.png",":confused:");i(/\s:128579:/ig,"http://edwardtbabinski.us/related-content/vu/128579.png",":128579:");i(/\s:129297:/ig,"http://edwardtbabinski.us/related-content/vu/129297.png",":129297:");i(/\s:astonished:/ig,"http://edwardtbabinski.us/related-content/vu/128562.png",":astonished:");i(/\s:mask:/ig,"http://edwardtbabinski.us/related-content/vu/128567.png",":mask:");i(/\s:129298:/ig,"http://edwardtbabinski.us/related-content/vu/129298.png",":129298:");i(/\s:129301:/ig,"http://edwardtbabinski.us/related-content/vu/129301.png",":129301:");i(/\s:9785:/ig,"http://edwardtbabinski.us/related-content/vu/9785.png",":9785:");i(/\s:128577:/ig,"http://edwardtbabinski.us/related-content/vu/128577.png",":128577:");i(/\s:confounded:/ig,"http://edwardtbabinski.us/related-content/vu/128534.png",":confounded:");i(/\s:128542:/ig,"http://edwardtbabinski.us/related-content/vu/128542.png",":128542:");i(/\s:worried:/ig,"http://edwardtbabinski.us/related-content/vu/128543.png",":worried:");i(/\s:triumph:/ig,"http://edwardtbabinski.us/related-content/vu/128548.png",":triumph:");i(/\s:cry:/ig,"http://edwardtbabinski.us/related-content/vu/128546.png",":cry:");i(/\s:sob:/ig,"http://edwardtbabinski.us/related-content/vu/128557.png",":sob:");i(/\s:frowning:/ig,"http://edwardtbabinski.us/related-content/vu/128550.png",":frowning:");i(/\s:anguished:/ig,"http://edwardtbabinski.us/related-content/vu/128551.png",":anguished:");i(/\s:fearful:/ig,"http://edwardtbabinski.us/related-content/vu/128552.png",":fearful:");i(/\s:weary:/ig,"http://edwardtbabinski.us/related-content/vu/128553.png",":weary:");i(/\s:grimacing:/ig,"http://edwardtbabinski.us/related-content/vu/128556.png",":grimacing:");i(/\s:cold_sweat:/ig,"http://edwardtbabinski.us/related-content/vu/128560.png",":cold_sweat:");i(/\s:scream:/ig,"http://edwardtbabinski.us/related-content/vu/128561.png",":scream:");i(/\s:flushed:/ig,"http://edwardtbabinski.us/related-content/vu/128563.png",":flushed:");i(/\s:128565:/ig,"http://edwardtbabinski.us/related-content/vu/128565.png",":128565:");i(/\s:rage:/ig,"http://edwardtbabinski.us/related-content/vu/128545.png",":rage:");i(/\s:angry:/ig,"http://edwardtbabinski.us/related-content/vu/128544.png",":angry:");i(/\s:smiling_imp:/ig,"http://edwardtbabinski.us/related-content/vu/128520.png",":smiling_imp:");i(/\s:imp:/ig,"http://edwardtbabinski.us/related-content/vu/128127.png",":imp:");i(/\s:japanese_ogre:/ig,"http://edwardtbabinski.us/related-content/vu/128121.png",":japanese_ogre:");i(/\s:skull:/ig,"http://edwardtbabinski.us/related-content/vu/128128.png",":skull:");i(/\s:9760a:/ig,"http://edwardtbabinski.us/related-content/vu/9760a.png",":9760a:");i(/\s:9760b:/ig,"http://edwardtbabinski.us/related-content/vu/9760b.png",":9760b:");i(/\s:ghost:/ig,"http://edwardtbabinski.us/related-content/vu/128123.png",":ghost:");i(/\s:alien:/ig,"http://edwardtbabinski.us/related-content/vu/128125.png",":alien:");i(/\s:128169:/ig,"http://edwardtbabinski.us/related-content/vu/128169.png",":128169:");i(/\s:see_no_evil:/ig,"http://edwardtbabinski.us/related-content/vu/128584.png",":see_no_evil:");i(/\s:hear_no_evil:/ig,"http://edwardtbabinski.us/related-content/vu/128585.png",":hear_no_evil:");i(/\s:speak_no_evil:/ig,"http://edwardtbabinski.us/related-content/vu/128586.png",":speak_no_evil:");i(/\s:muscle:/ig,"http://edwardtbabinski.us/related-content/vu/128170.png",":muscle:");i(/\s:128072:/ig,"http://edwardtbabinski.us/related-content/vu/128072.png",":128072:");i(/\s:128073:/ig,"http://edwardtbabinski.us/related-content/vu/128073.png",":128073:");i(/\s:9757:/ig,"http://edwardtbabinski.us/related-content/vu/9757.png",":9757:");i(/\s:up:/ig,"http://edwardtbabinski.us/related-content/vu/128070.png",":up:");i(/\s:middle:/ig,"http://edwardtbabinski.us/related-content/vu/128405.png",":middle:");i(/\s:128071:/ig,"http://edwardtbabinski.us/related-content/vu/128071.png",":128071:");i(/\s:9996:/ig,"http://edwardtbabinski.us/related-content/vu/9996.png",":9996:");i(/\s:128406:/ig,"http://edwardtbabinski.us/related-content/vu/128406.png",":128406:");i(/\s:129304:/ig,"http://edwardtbabinski.us/related-content/vu/129304.png",":129304:");i(/\s:128400:/ig,"http://edwardtbabinski.us/related-content/vu/128400.png",":128400:");i(/\s:9995:/ig,"http://edwardtbabinski.us/related-content/vu/9995.png",":9995:");i(/\s:128076:/ig,"http://edwardtbabinski.us/related-content/vu/128076.png",":128076:");i(/\s:128077:/ig,"http://edwardtbabinski.us/related-content/vu/128077.png",":128077:");i(/\s:128078:/ig,"http://edwardtbabinski.us/related-content/vu/128078.png",":128078:");i(/\s:9994:/ig,"http://edwardtbabinski.us/related-content/vu/9994.png",":9994:");i(/\s:128074:/ig,"http://edwardtbabinski.us/related-content/vu/128074.png",":128074:");i(/\s:clap:/ig,"http://edwardtbabinski.us/related-content/vu/128079.png",":clap:");i(/\s:eyes:/ig,"http://edwardtbabinski.us/related-content/vu/128064.png",":eyes:");i(/\s:eyeball:/ig,"http://edwardtbabinski.us/related-content/vu/128065.png",":eyeball:");i(/\s:tongue:/ig,"http://edwardtbabinski.us/related-content/vu/128069.png",":tongue:");i(/\s:lips:/ig,"http://edwardtbabinski.us/related-content/vu/128068.png",":lips:");i(/\s:kiss:/ig,"http://edwardtbabinski.us/related-content/vu/128139.png",":kiss:");i(/\s:cupid:/ig,"http://edwardtbabinski.us/related-content/vu/128152.png",":cupid:");i(/\s:heart:/ig,"http://edwardtbabinski.us/related-content/vu/10084.png",":heart:");i(/\s:heartbeat:/ig,"http://edwardtbabinski.us/related-content/vu/128147.png",":heartbeat:");i(/\s:brokenheart:/ig,"http://edwardtbabinski.us/related-content/vu/128148.png",":brokenheart:");i(/\s:twohearts:/ig,"http://edwardtbabinski.us/related-content/vu/128149.png",":twohearts:");i(/\s:sparklingheart:/ig,"http://edwardtbabinski.us/related-content/vu/128150.png",":sparklingheart:");i(/\s:heartpulse:/ig,"http://edwardtbabinski.us/related-content/vu/128151.png",":heartpulse:");i(/\s:blueheart:/ig,"http://edwardtbabinski.us/related-content/vu/128153.png",":blueheart:");i(/\s:greenheart:/ig,"http://edwardtbabinski.us/related-content/vu/128154.png",":greenheart:");i(/\s:yellowheart:/ig,"http://edwardtbabinski.us/related-content/vu/128155.png",":yellowheart:");i(/\s:128156:/ig,"http://edwardtbabinski.us/related-content/vu/128156.png",":128156:");i(/\s:revolvingheart:/ig,"http://edwardtbabinski.us/related-content/vu/128158.png",":revolvingheart:");i(/\s:zzz:/ig,"http://edwardtbabinski.us/related-content/vu/128164.png",":zzz:");i(/\s:bomb:/ig,"http://edwardtbabinski.us/related-content/vu/128163.png",":bomb:");i(/\s:africa:/ig,"http://edwardtbabinski.us/related-content/vu/127757.png",":africa:");i(/\s:americas:/ig,"http://edwardtbabinski.us/related-content/vu/127758.png",":americas:");i(/\s:asia:/ig,"http://edwardtbabinski.us/related-content/vu/127759.png",":asia:");i(/\s:art:/ig,"http://edwardtbabinski.us/related-content/vu/127912.png",":art:");i(/\s:127771:/ig,"http://edwardtbabinski.us/related-content/vu/127771.png",":127771:");i(/\s:sunny:/ig,"http://edwardtbabinski.us/related-content/vu/9728.png",":sunny:");i(/\s:fullmoon:/ig,"http://edwardtbabinski.us/related-content/vu/127773.png",":fullmoon:");i(/\s:facesun:/ig,"http://edwardtbabinski.us/related-content/vu/127774.png",":facesun:");i(/\s:127919:/ig,"http://edwardtbabinski.us/related-content/vu/127919.png",":127919:");i(/\s:127922:/ig,"http://edwardtbabinski.us/related-content/vu/127922.png",":127922:");i(/\s:spades:/ig,"http://edwardtbabinski.us/related-content/vu/9824.png",":spades:");i(/\s:cardshearts:/ig,"http://edwardtbabinski.us/related-content/vu/9829.png",":cardshearts:");i(/\s:9830:/ig,"http://edwardtbabinski.us/related-content/vu/9830.png",":9830:");i(/\s:clubs:/ig,"http://edwardtbabinski.us/related-content/vu/9827.png",":clubs:");i(/\s:football:/ig,"http://edwardtbabinski.us/related-content/vu/127944.png",":football:");i(/\s:128330:/ig,"http://edwardtbabinski.us/related-content/vu/128330.png",":128330:");i(/\s:9774:/ig,"http://edwardtbabinski.us/related-content/vu/9774.png",":9774:");i(/\s:9775:/ig,"http://edwardtbabinski.us/related-content/vu/9775.png",":9775:");i(/\s:127808:/ig,"http://edwardtbabinski.us/related-content/vu/127808.png",":127808:");i(/\s:9752:/ig,"http://edwardtbabinski.us/related-content/vu/9752.png",":9752:");$("div.emoWrap").one("click",function(){if(a){alert(a)}});$(".emo").css("cursor","pointer").on("click",function(c){$(".emoKey").remove();$(this).after('<input class="emoKey" type="text" size="'+this.alt.length+'" value=" '+this.alt+'" />');$(".emoKey").trigger("select");c.stopPropagation()});$(".emoKey").on("click",function(){$(this).focus().select()})};return function(a){b(a)}})();
