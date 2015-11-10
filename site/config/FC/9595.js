UIProvider ={"curId":"980","curNom":"UAH",

  "grpId": "100002",
  "id": "9595",
  "logo": "9595.gif",
  "receiptName": "",
  "sName": "Global Money",
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
                    "header": "¬ведите идентификатор кошелька",
                  "footer": "",
                  "mask": "<!^\\d+${1,32}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{1,32}$",
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