UIProvider ={"curId":"398","curNom":"KZT",
  "grpId": "100005",
  "id": "2083",
  "logo": "2083.gif",
  "receiptName": "",
  "sName": "ТОО «КЭЦ»",
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
                  "header": "Введите лицевой счет абонента/№ договора",
                  "footer": "",
                  "mask": "<!^\\d+${1,9}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{1,9}$",
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