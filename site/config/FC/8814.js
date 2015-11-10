
UIProvider  ={"curId":"498","curNom":"MDL",


      "grpId" : "100003",
      "id" : "8814",



      "logo" : "8814.gif",
      "receiptName" : "",
      "sName" : "Яндекс.Деньги",
      
      
      
     
      "__objects" : [
      
      
      
                                                     {
                  "__type" : "constParams",
                  "__objects" : [
                        {
                             "__type" : "param",
                             "name" : "_extra_ev_serviceid",
                             "value" : "yamoney"
                        },
                        {
                             "__type" : "param",
                             "name" : "_extra_PAY_TYPE",
                             "value" : "11058"
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
                                                     "header" : "Введите номер счета",
                                                     "mask": "<!^\\d+${1,40}>",
                                                     "name": "account",
                                                     "regexp": "^\\d{1,40}$",
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
                                                     "mask" : "<!^\\d+${1,4}>",
                                                     "name" : "_extra_ev_amount",
                                                     "regexp" : "^\\d{1,4}$",
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
                             "pageId" : "6582",
                             "title" : "Онлайн ответ",
                             "__objects" : [
                                   {
                                         "__type" : "controls",
                                         "__objects" : [
                                               {
                                                     "disp_name" : "disp1",
                                                     "disp_type" : "",
                                                     "header" : "Сумма(руб.):",
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
                             "pageId" : "6583",
                             "title" : "Онлайн ответ",
                             "__objects" : [
                                   {
                                         "__type" : "controls",
                                         "__objects" : [
                                               {
                                                     "disp_name" : "disp2",
                                                     "disp_type" : "",
                                                     "header" : "Курс:",
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
                                                     "header" : "Информация:",
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
//  "id": "8814",
//  "logo": "8814.gif",
//  "receiptName": "",
//  "sName": "Яндекс.Деньги",
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
//                    "header": "Введите номер счета",
//                  "footer": "",
//                  "mask": "<!^.+${0,40}>",
//                  "name": "account",
//                  "nobr": "false",
//                  "regexp": "^.+$",
//                  "strip": "True",
//                  "type": "text_input"
//                },
//                {
//                  "layout": "AL",
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