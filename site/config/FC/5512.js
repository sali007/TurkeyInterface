UIProvider ={"curId":"398","curNom":"KZT",
  "grpId": "100005",
  "id": "5512",
  "logo": "5512.gif",
  "receiptName": "",
  "sName": "Chocolife.me - Оплата заказа",
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
                  "header": "Введите Ваш номер заказа",
                  "footer": "",
                  "mask": "<!^\\d+${1,8}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{1,8}$",
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