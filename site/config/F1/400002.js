UIProvider = {
    "curId": "398", "curNom": "UZS",
  "grpId": "1000011",
  "id": "400002",
  "logo": "400002.png",
  "receiptName": "",
  "sName": "UCELL",
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
                  "footer": "Внимание! Номер телефона вводится в формате: 93xxxxxxx, 94xxxxxxx. Пример: 942432010",
                  "mask": "9<!^\\d+${8}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^[93|94]{2}[0-9]{7}$",
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