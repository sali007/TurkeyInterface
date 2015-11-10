
UIProvider ={"curId":"643","curNom":"RUB",
  "grpId": "100001",
  "id": "863",
  "logo": "863.gif",
  "receiptName": "",
  "sName": "ВКонтакте.ру",
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
                                                   "header": "Введите номер мобильного, id, email или логин ВКонтакте",
                                                   "mask": "<!^.+${1,28}>",
                                                     "name" : "account",
                                                     "nobr" : "false",
                                                     "regexp": "^.{1,28}$",
                                                     "strip" : "false",
                                                     "type" : "text_input"
                                               },
                                               {
                                                     "layout" : "AL",
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
