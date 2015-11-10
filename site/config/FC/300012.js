UIProvider = {
    "curId": "944", "curNom": "AZN",
  "grpId": "1000014",
  "id": "300012",
  "logo": "5800.gif",
  "receiptName": "",
  "sName": "Bakcell</br>Азербайджан",
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
                  "header": "Введите Ваш номер ",
                  "footer": "Минимальная сумма оплаты составляет 2 USD. Номер Вводится в формате 55xxxxxxx.",
                  "mask": "55<!^\\d+${7}>",
                  "name": "account",
                  "nobr": "false",
                  "regexp": "^[0-9]{9}$",
                  "strip": "false",
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