UIProvider ={"curId":"643","curNom":"RUB",
  "round_math":"~1",
  "grpId": "100002",
  "id": "200004",
  "logo": "200004.gif",
  "receiptName": "",
  "sName": "TTNET MOBIL",
  "small_logo": "",
  "tag": "visible,ranges",
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
                    "header": "Telefon numarasını başında 0 olmadan 10 hane olarak giriniz",
                    "mask": "<!^\\d+${10}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{10}$",
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
                                                 "header" : "Ваш долг составляет:",
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






      ]
    }
  ]
}