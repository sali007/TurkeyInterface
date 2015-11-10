
UIProvider  ={"curId":"498","curNom":"MDL",


      "grpId" : "100003",
      "id" : "814",



      "logo" : "814.gif",
      "receiptName" : "",
      "sName" : "WebMoney",
      
      
      
     
      "__objects" : [
      
      
      
                                                     {
                  "__type" : "constParams",
                  "__objects" : [
                        {
                             "__type" : "param",
                             "name" : "_extra_ev_code",
                             "value" : String(parseInt(Math.round(new Date().getTime()/1000))+parseInt((Math.floor(Math.random()*10000))))
                        },
                        {
                             "__type" : "param",
                             "name" : "_extra_PAY_TYPE",
                             "value" : "1"
                        }
                  ]
            },


      
      
      
      
      
      
      
      
      
            {
                  "__type" : "constParams"
            },
            {
                  "__type" : "pages",
                  "__objects" : [
                        {
                             "pageId" : "6865",
                             
                             "__objects" : [
                                   {
                                         "__type" : "controls",
                                         "__objects" : [
                                               {
                                                   "header": "Enter Z-wallet number",
                                                     "mask" : "<!^\\d+${12}>",
                                                     "name" : "account",
                                                     "regexp" : "^\\d{12}$",
                                                     "type" : "text_input"
                                               },
                                               {
                                                     "layout" : "DG",
                                                     "type" : "keyboard"
                                               }
                                         ]
                                   }
                             ]
                        },
                        {
                             "pageId" : "6997",
                             "useOnline" : "true",
                             "__objects" : [
                                   {
                                         "__type" : "controls",
                                         "__objects" : [
                                               {
                                                     "header" : "Введите желаемую сумму в Леях",
                                                     "mask" : "<!^\\d+${1,3}>",
                                                     "name" : "_extra_ev_sumorder",
                                                     "regexp" : "^\\d{1,3}$",
                                                     "type" : "text_input"
                                               },
                                               {
                                                     "layout" : "DG",
                                                     "type" : "keyboard"
                                               }
                                         ]
                                   }
                             ]
                        },
                        
                        
                        
                        
                        
                        
                        
//                        {
//                             "pageId" : "6581",
//                             "title" : "Онлайн ответ",
//                             "__objects" : [
//                                   {
//                                         "__type" : "controls",
//                                         "__objects" : [
//                                               {
//                                                     "disp_name" : "disp1",
//                                                     "disp_type" : "",
//                                                     "header" : "Сумма(руб.):",
//                                                     "mask" : "<!^.+${1,40}>",
//                                                     "name" : "data",
//                                                     "nobr" : "false",
//                                                     "regexp" : "^.+$",
//                                                     "strip" : "false",
//                                                     "type" : "disp_input",
//                                                     "visible" : "true",
//                                                    
//                                               }
//                                         ]
//                                   }
//                             ]
//                        },
                        
                        
                        
                        
//                        {
//                             "pageId" : "6582",
//                             "title" : "Онлайн ответ",
//                             "__objects" : [
//                                   {
//                                         "__type" : "controls",
//                                         "__objects" : [
//                                               {
//                                                     "disp_name" : "disp1",
//                                                     "disp_type" : "",
//                                                     "header" : "Сумма(руб.):",
//                                                     "mask" : "<!^.+${1,40}>",
//                                                     "name" : "data",
//                                                     "nobr" : "false",
//                                                     "regexp" : "^.+$",
//                                                     "strip" : "false",
//                                                     "type" : "disp_input",
//                                                     "visible" : "true"
//                                               }
//                                         ]
//                                   }
//                             ]
//                        },
                        
                         {
                             "pageId" : "6583",
                             "title" : "Онлайн ответ",
                             "__objects" : [
                                   {
                                         "__type" : "controls",
                                         "__objects" : [
                                               {
                                                     "disp_name" : "disp2",
                                                     "disp_type" : "",
                                                     "header" : "Необходимо (лей):",
                                                     "mask" : "<!^.+${1,40}>",
                                                     "name" : "data",
                                                     "nobr" : "false",
                                                     "regexp" : "^.+$",
                                                     "strip" : "false",
                                                     "type" : "disp_input",
                                                     "visible" : "true"
                                               }
                                         ]
                                   }
                             ]
                        },
                        
                        
                         {
                             "pageId" : "6584",
                             "title" : "Онлайн ответ",
                             "__objects" : [
                                   {
                                         "__type" : "controls",
                                         "__objects" : [
                                               {
                                                     "disp_name" : "disp3",
                                                     "disp_type" : "",
                                                     "header" : "Бонус (лей):",
                                                     "mask" : "<!^.+${1,40}>",
                                                     "name" : "data",
                                                     "nobr" : "false",
                                                     "regexp" : "^.+$",
                                                     "strip" : "false",
                                                     "type" : "disp_input",
                                                     "visible" : "true"
                                               }
                                         ]
                                   }
                             ]
                        }
                        
                        
                        
 

                        
                        
                        
                  ]
            }
            
            
      ]
};




//UIProvider  ={"curId":"498","curNom":"MDL",
//  "grpId": "100003",
//  "id": "814",
//  "logo": "814.gif",
//  "receiptName": "",
//  "sName": "WebMoney",
//  "small_logo": "",
//  "tag": "visible",
//  "__objects": [
//    {
//      "__type": "constParams"
//    },
//    {
//      "__type": "pages",
//      "__objects": [
//        {
//          "pageId": "30605",
//          "title": "",
//          "useOnline": "",
//          "__objects": [
//            {
//              "__type": "controls",
//              "__objects": [
//                {
//                  "header": "Введите номер Z-кошелека",
//                  "footer": "",
//                  "mask": "Z<!^\\d+${12}>",
//                  "name": "account",
//                  "nobr": "false",
//                  "regexp": "^Z\\d{12}$",
//                  "strip": "False",
//                  "type": "text_input"
//                },
//                {
//                  "layout": "DG",
//                  "type": "keyboard"
//                }
//              ]
//            }
//          ]
//        }
//      ]
//    }
//  ]
//}