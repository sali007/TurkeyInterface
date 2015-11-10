UIProvider  ={"curId":"498","curNom":"MDL",
  "grpId": "100003",
  "id": "1034",
  "logo": "1034.gif",
  "receiptName": "",
  "sName": "EuroCreditBank",
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
                  "header": "¬ведите номер счета",
                  "footer": "",
                  "mask": "<!^\\d+${9,21}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{9,21}$",
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