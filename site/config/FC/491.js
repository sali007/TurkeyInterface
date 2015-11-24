UIProvider ={"curId":"980","curNom":"UAH",

  "grpId": "100002",
  "id": "491",
  "logo": "491.gif",
  "receiptName": "",
  "sName": "Triolan",
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
                  "header": "Логин (Номер счета)",
                  "footer": "",
                  "mask": "<!^\\d+${5,15}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{5,15}$",
                  "strip": "false",
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