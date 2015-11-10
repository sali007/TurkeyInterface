UIProvider ={"curId":"398","curNom":"KZT",
  "grpId": "100005",
  "id": "5679",
  "logo": "5679.gif",
  "receiptName": "",
  "sName": "Тотобет",
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
                  "header": "Введите номер Вашего счета",
                  "footer": "",
                  "mask": "<!^\\d+${1,7}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{1,7}$",
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