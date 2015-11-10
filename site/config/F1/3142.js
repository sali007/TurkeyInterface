UIProvider ={"curId":"974","curNom":"BYR",
  "grpId": "100006",
  "id": "3142",
  "logo": "3142.gif",
  "receiptName": "",
  "sName": "TUT.by - пополнение счета",
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
                    "header": "¬ведите ID счета TUT.by",
                  "footer": "",
                  "mask": "<!^\\d+${2,11}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{2,11}$",
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