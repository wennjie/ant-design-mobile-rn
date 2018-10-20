webpackJsonp([107],{1161:function(t,e){t.exports={content:["section",["p","\u7528\u4e8e\u9009\u62e9\u65e5\u671f\u6216\u8005\u65f6\u95f4\u3002"],["h3","\u89c4\u5219"],["ul",["li",["p","\u6700\u591a\u5c55\u793a 5 \u4e2a\u72ec\u7acb\u6eda\u8f6e\uff0c\u6bcf\u4e2a\u6eda\u8f6e\u8868\u793a\u4e00\u4e2a\u4e0d\u540c\u7684\u503c\u3002"]]]],meta:{category:"Components",type:"Data Entry",title:"DatePicker",subtitle:"\u65e5\u671f\u9009\u62e9",filename:"components/date-picker/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["table",["thead",["tr",["th","\u5c5e\u6027"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","mode"],["td","\u65e5\u671f\u9009\u62e9\u7684\u7c7b\u578b, \u53ef\u4ee5\u662f\u65e5\u671f",["code","date"],",\u65f6\u95f4",["code","time"],",\u65e5\u671f+\u65f6\u95f4",["code","datetime"],",\u5e74",["code","year"],",\u6708",["code","month"]],["td","String"],["td",["code","date"]]],["tr",["td","value"],["td","\u5f53\u524d\u9009\u4e2d\u65f6\u95f4"],["td","Date"],["td","\u65e0"]],["tr",["td","minDate"],["td","\u6700\u5c0f\u53ef\u9009\u65e5\u671f"],["td","Date"],["td","2000-1-1"]],["tr",["td","maxDate"],["td","\u6700\u5927\u53ef\u9009\u65e5\u671f"],["td","Date"],["td","2030-1-1"]],["tr",["td","minuteStep"],["td","\u5206\u949f\u6570\u9012\u589e\u6b65\u957f\u8bbe\u7f6e"],["td","Number"],["td","1"]],["tr",["td","locale"],["td","\u56fd\u9645\u5316\uff0c\u53ef\u8986\u76d6\u5168\u5c40",["code","[LocaleProvider](https://mobile.ant.design/components/locale-provider)"],"\u7684\u914d\u7f6e"],["td","Object: {DatePickerLocale: {year, month, day, hour, minute, am?, pm?}, okText, dismissText }"],["td","-"]],["tr",["td","disabled"],["td","\u662f\u5426\u4e0d\u53ef\u7528"],["td","Boolean"],["td","false"]],["tr",["td","onChange"],["td","\u65f6\u95f4\u53d1\u751f\u53d8\u5316\u7684\u56de\u8c03\u51fd\u6570"],["td","(date: Object): void"],["td","-"]],["tr",["td","onValueChange"],["td","\u6bcf\u5217 picker \u6539\u53d8\u65f6\u7684\u56de\u8c03"],["td","(vals: any, index: number) => void"],["td","-"]],["tr",["td","format"],["td","\u683c\u5f0f\u5316\u9009\u4e2d\u7684\u503c"],["td",["code","(value: Date) => date string"]," / ",["code","format string"],"(\u5bf9\u5e94 mode \u4e0b\u683c\u5f0f\u5206\u522b\u4e3a:",["code","YYYY-MM-DD"],",",["code","HH:mm"],",",["code","YYYY-MM-DD HH:mm"],")"],["td","-"]],["tr",["td","title"],["td","\u5f39\u6846\u7684\u6807\u9898"],["td","string/React.ReactElement"],["td","\u65e0"]],["tr",["td","extra"],["td","\u663e\u793a\u6587\u6848"],["td","String"],["td",["code","\u8bf7\u9009\u62e9"]]],["tr",["td","onOk"],["td","\u70b9\u51fb\u9009\u4e2d\u65f6\u6267\u884c\u7684\u56de\u8c03"],["td","(val): void"],["td","\u65e0"]],["tr",["td","onDismiss"],["td","\u70b9\u51fb\u53d6\u6d88\u65f6\u6267\u884c\u7684\u56de\u8c03"],["td","(): void"],["td","\u65e0"]]]],["p","\u6ce8\u610f\uff1a\u65e5\u671f\u5b57\u7b26\u4e32\u5728\u4e0d\u540c\u6d4f\u89c8\u5668\u6709\u4e0d\u540c\u7684\u5b9e\u73b0\uff0c\u4f8b\u5982 ",["code","new Date('2017-1-1')"]," \u5728 Safari \u4e0a\u662f Invalid Date\uff0c\u800c\u5728 Chrome \u4e0a\u662f\u80fd\u6b63\u5e38\u89e3\u6790\u7684\u3002"],["p","\u6ce8\u610f\uff1a",["code","DatePicker"]," children \u5efa\u8bae\u662f ",["code","List.Item"],", \u5982\u679c\u4e0d\u662f\uff0c\u9700\u8981\u662f\u81ea\u5b9a\u4e49\u7ec4\u4ef6(\u7ec4\u4ef6\u5185\u9700\u5904\u7406 ",["code","onClick"]," / ",["code","extra"]," / ",["code","children"]," \u5c5e\u6027\uff0c\u8be6\u60c5\u8bf7\u770b ",["a",{title:null,href:"https://mobile.ant.design/components/date-picker"},"demo"]]]}}});