UIProvider ={"curId":"643","curNom":"RUB",
  "round_math":"~1",
  "grpId": "100002",
  "id": "200041",
  "logo": "200041.gif",
  "receiptName": "",
  "sName": "SEDAŞ",
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
                    "header": "Lütfen 11 hanelik İşletme Kodu ve Abone Numarasını giriniz",
                    "mask": "<!^\\d+${22}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{22}$",
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