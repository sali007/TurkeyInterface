UIProvider  ={"curId":"498","curNom":"MDL",


      "grpId" : "100003",
      "id" : "8176",



      "logo" : "8176.gif",
      "receiptName" : "",
      "sName" : "ciupi.md",
      "__objects" : [
                                        {
                  "__type" : "constParams",
                  "__objects" : [
                     
                        {
                             "__type" : "param",
                             "name" : "_extra_PAY_TYPE",
                             "value" : "10158"
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
                             "useOnline" : "true",
                             "__objects" : [
                                   {
                                         "__type" : "controls",
                                         "__objects" : [
                                               {
                                                     "header" : "Введите аккаунт",
                                                     "mask" : "<!^\\d+${7,8}>",
                                                     "name" : "account",
                                                     "regexp" : "^\\d{7,8}$",
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
                                                     "header" : "Ваше имя:",
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
//  "id": "8176",
//  "logo": "8176.gif",
//  "receiptName": "",
//  "sName": "ciupi.md",
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
//                    "header": "Введите аккаунт",
//                  "footer": "",
//                  "mask": "<!^.+${40}>",
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