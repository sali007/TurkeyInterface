
UIProvider ={"curId":"643","curNom":"RUB",
  "grpId": "100001",
  "id": "400012",
  "logo": "400012.gif",
  "receiptName": "",
  "sName": "TELETIE.Бизнес",
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
          "useOnline": "",
          "__objects": [
            {
              "__type": "controls",
              "__objects": [
                {
                  "header": "Ваш номер телефона",
                  "footer": "Внимание! Номер вводится в формате: ХХХХХXXXXXX",
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
        }
      ]
    }
  ]
}