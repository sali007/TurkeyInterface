UIProvider ={"curId":"398","curNom":"KZT",
  "grpId": "100005",
  "id": "4050",
  "logo": "4050.gif",
  "receiptName": "",
  "sName": "Алматытелеком",
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
                  "header": "Введите номер телефона/счета",
                  "footer": "",
                  "mask": "<!^\\d+${4,10}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{4,10}$",
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