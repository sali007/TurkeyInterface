UIProvider ={"curId":"980","curNom":"UAH",

  "grpId": "100002",
  "id": "476",
  "logo": "476.gif",
  "receiptName": "",
  "sName": "IPNET",
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
                  "mask": "<!^\\d+${9}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{9}$",
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