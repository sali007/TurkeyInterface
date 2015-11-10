UIProvider ={"curId":"398","curNom":"KZT",
  "grpId": "1000011",
  "id": "300010",
  "logo": "416.gif",
  "receiptName": "",
  "sName": "Вавилон-Мобайл",
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
                  "footer": "Внимание! Номер вводится в формате: 918xxxxxx, 98xxxxxxx . Пример: 918849705",
                  "mask": "<!^\\d+${9}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^\\d{9}$",
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
};