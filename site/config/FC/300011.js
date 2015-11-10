UIProvider = {
    "curId": "398", "curNom": "KZT",
    "grpId": "1000011",
    "id": "300011",
    "logo": "300011.png",
    "receiptName": "",
    "sName": "Мегафон</br>Таджикистан",
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
                              "header": "Введите номер телефона",
                              "footer": "Внимание! Номер вводится в формате: 90xxxxxxx, 55xxxxxxx. Пример: 901037317",
                              "mask": "<!^\\d+${9}>",
                              "name": "account",
                              "nobr": "false",
                              "regexp": "^[55|90]{2}[0-9]{7}$",
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