UIProvider ={"curId":"980","curNom":"UAH",

  "grpId": "100002",
  "id": "7806",
  "logo": "3019.gif",
  "receiptName": "",
  "sName": "Альфа_ПДС",
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
                  "header": "Введите номер платежной карты и номер дебетного счета",
                  "footer": "",
                  "mask": "<!^\\d+${16}>\<!^\\d+${14}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{16}\\\d{14}$",
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