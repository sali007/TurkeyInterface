UIProvider ={"curId":"398","curNom":"KZT",
  "grpId": "100005",
  "id": "142",
  "logo": "142.gif",
  "receiptName": "",
  "sName": "Билайн Казахстан",
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
                  "header": "Введите Ваш номер",
                  "footer": "Внимание номер телефона вводится в формате (7XX)XXX-XX-XX. Пример: 7772157906 ",
                  "mask": "<!^\\d+${10}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^[7]\\d{9}$",
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