UIProvider ={"curId":"980","curNom":"UAH",

  "grpId": "100002",
  "id": "664",
  "logo": "664.gif",
  "receiptName": "",
  "sName": "People Net",
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
                  "header": "Введите номер телефона",
                  "footer": "",
                  "mask": "(<!^\\d+${3}>)<!^\\d+${3}>-<!^\\d+${2}>-<!^\\d+${2}>",
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