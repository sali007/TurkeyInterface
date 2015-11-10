UIProvider ={"curId":"980","curNom":"UAH",

  "grpId": "100002",
  "id": "437",
  "logo": "437.gif",
  "receiptName": "",
  "sName": "WebMoney",
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
                  "header": "¬ведите номер U-кошелька",
                  "footer": "",
                  "mask": "U<!^\\d+${12}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^U\\d{12}$",
                  "strip": "False",
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