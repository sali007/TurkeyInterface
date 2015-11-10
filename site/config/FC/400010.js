
UIProvider ={"curId":"643","curNom":"RUB",
  "grpId": "100001",
  "id": "400010",
  "logo": "400010.gif",
  "receiptName": "",
  "sName": "Телефония МТТ ACBT",
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
                  "header": "Введите Ваш Лицевой Счет",
                  "footer": "Внимание! Номер вводится в формате: ХХХХХ",
                  "mask": "<!^\\d+${5}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{5}$",
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