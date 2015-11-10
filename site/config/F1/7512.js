
UIProvider = { "curId": "980", "curNom": "UAH",
  "grpId": "100002",
  "id": "7512",
  "logo": "7512.gif",
  "receiptName": "",
  "sName": "Баланс Вконтакте",
  "small_logo": "",
  "tag": "visible",
      "__objects" : [
            {
                  "__type" : "constParams"
            },
            {
                  "__type" : "pages",
                  "__objects" : [
                        {
                              "pageId" : "2301",
                             "title" : "",
                             "useOnline" : "true",
                             "__objects" : [
                                   {
                                         "__type" : "controls",
                                         "__objects" : [
                                               {
                                                     "header" : "Введите Ваш номер",
                                                     "mask" : "<!^\\d*${1,28}>",
                                                     "name" : "account",
                                                     "nobr" : "false",
                                                     "regexp" : "^\\d{1,28}$",
                                                     "strip" : "false",
                                                     "type" : "text_input"
                                               },
                                               {
                                                     "layout" : "DG",
                                                     "type" : "keyboard"
                                               }
                                         ]
                                   }
                             ]
                        },
                        {
                             "pageId" : "6582",
                             "title" : "Онлайн ответ",
                             "__objects" : [
                                   {
                                         "__type" : "controls",
                                         "__objects" : [
                                               {
                                                     "disp_name" : "disp1",
                                                     "disp_type" : "extra",
                                                     "header" : "Проверьте ваши данные:",
                                                     "mask" : "<!^.+${1,40}>",
                                                     "name" : "data",
                                                     "nobr" : "false",
                                                     "regexp" : "^.+$",
                                                     "strip" : "false",
                                                     "type" : "disp_input",
                                                     "visible" : "true"
                                               }
                                         ]
                                   }
                             ]
                        }
                  ]
            }
      ]
};
