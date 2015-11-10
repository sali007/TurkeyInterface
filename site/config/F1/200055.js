UIProvider ={"curId":"643","curNom":"RUB",
  "round_math":"~1",
  "grpId": "100002",
  "id": "200055",
  "logo": "200055.gif",
  "receiptName": "",
  "sName": "Kütahya Su",
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
                    "header": "Lütfen 8 haneli abone numarasını ve 8 haneli sicil numarasını giriniz.",
                    "footer": " Sicil numarası 8 haneden küçük ise sıfır ile 8 haneye tamamlayınız ve iki numara arasına ",
                    "mask": "<!^\\d+${8}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{8}$",
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