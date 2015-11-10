UIProvider ={"curId":"398","curNom":"KZT",
  "grpId": "100005",
  "id": "2079",
  "logo": "2079.gif",
  "receiptName": "",
  "sName": "ШыгысЭнерго - электроэнергия",
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
                  "header": "Введите номер лицевого счета или номер договора",
                  "footer": "",
                  "mask": "<!^\\d+${1,12}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{1,12}$",
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