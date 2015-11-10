UIProvider ={"curId":"643","curNom":"RUB",
  "round_math":"~1",
  "grpId": "100002",
  "id": "200045",
  
  "logo": "200045.gif",
  "receiptName": "",
  "sName": "Asat (Antalya)",
  "small_logo": "",
  "tag": "visible",
  "__objects": [
    {
      "__type": "constParams"
    },
    {
      "__type": "pages",
      "__objects": [
        {
          "pageId": "30605",
          "title": "",
          "useOnline": "true",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                    "header": "Lütfen Abone Numaranızın başına ' 0 ' ekleyerek 8 haneye tamamlayınız.",
                    "footer": " Lütfen Sicil Numaranızın başına ' 0 ' ekleyerek 8 haneye tamamlayınız. Abone ve Sicil no toplam 16 hane olmalıdır.İki numara ardarda yazılmalıdır.",
                    "mask": "<!^\\d+${9}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{9}$",
                  "strip": "True",
                  "type": "text_input"
                },
                {
                  "layout": "DG",
                  "type": "keyboard"
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
                                                 "header" : "Название:",
                                                 "mask" : "<!^.+${1,400}>",
                                                 "name" : "data",
                                                 "nobr" : "false",
                                                 "regexp" : "^.+$",
                                                 "strip" : "false",
                                                 "type" : "disp_input",
                                                 "visible" : "true"
                                             },



                                                   {
                                                       "disp_name": "disp2",
                                                       "disp_type": "",
                                                       "header": "Долг:",
                                                       "mask": "<!^.+${1,400}>",
                                                       "name": "data2",
                                                       "nobr": "false",
                                                       "regexp": "^.+$",
                                                       "strip": "false",
                                                       "type": "disp_input",
                                                       "visible": "true"
                                                   },



                                                         {
                                                             "disp_name": "disp3",
                                                             "disp_type": "",
                                                             "header": "id фатуры:",
                                                             "mask": "<!^.+${1,400}>",
                                                             "name": "data3",
                                                             "nobr": "false",
                                                             "regexp": "^.+$",
                                                             "strip": "false",
                                                             "type": "disp_input",
                                                             "visible": "true"
                                                         },










                                       ]
                                   }
                             ]
      },












      ]
    }
  ]
}