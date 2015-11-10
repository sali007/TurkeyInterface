UIProvider ={"curId":"980","curNom":"UAH",

  "grpId": "100002",
  "id": "7499",
  "logo": "7499.gif",
  "receiptName": "",
  "sName": "Digital Payment Systems",
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
                    "header": "¬ведите номер кошелька, счета или телефона",
                  "footer": "",
                  "mask": "<!^\\d+${1,13}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{1,13}$",
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