import json
import requests

from pprint import pprint

"""
# сколько всего профилей инвесторов удалось забрать
# у скольки из них есть аватарка
# у скольки из них есть описание
# у скольки из них есть хотя бы 1 человек в команде
# у скольки из них есть хотя бы 1 сделка в списке сделок
# 3. плюс раскладка по типам инвесторов (столько-то ангелы, столь-ко-то акселераторы и тд)
# у скольки из  них последняя сделка была в 2023 году или 2024 году
у скольки из них есть емейл, на который можно создать аккаунт юзера. эт может быть общий емейл фонда\инвестора например
"""



with open("dump.json") as f:
    data = json.load(f)


def get_deals(investor_id: str):
    url_team = "https://project-valentine-api.herokuapp.com/rounds?filter[investor_id]={}&sort=-announced_date"

    try:
        r = requests.get(url_team.format(data[0]["id"]))
    except:
        print("unable to get deals")
        return []
    if r.status_code != 200:
        return []
    return r.json().get("data")


total_investors = 0
total_avatar = 0
total_description = 0
total_team = 0
total_deals = 0
total_23_24_deals = 0
total_team_with_all_fields = 0
total_team_with_all_fields_and_2324 = 0
total_team_with_all_fields_and_2324_profiles = []

total_by_type = {}
names = []

k = 0
for ind, inv in enumerate(data):
    print(ind, inv["attributes"]["name"])
    if inv["attributes"]["name"] in names:
        continue
    else:
        names.append(inv["attributes"]["name"])

    inv["deals"] = get_deals(inv["id"])

    if inv["attributes"].get("external-image-s3-key") is not None:
        total_avatar += 1
    if inv["attributes"].get("description") is not None:
        total_description += 1
    if len(inv["team"]) > 0:
        """
        есть аватарка
        есть описание
        есть сделки
        и у кого инвестор тайп: early stage, pre-seed, seed, accelerator
        """
        total_team += 1

        if {"early stage", "pre-seed", "seed", "accelerator"}.intersection([s.lower() for s in inv["attributes"]["stages"]]) != {}:
            if inv["attributes"].get("description") is not None:
                if inv["attributes"].get("external-image-s3-key") is not None:
                    total_team_with_all_fields += 1
                    total_team_with_all_fields_and_2324_profiles.append(inv)
                    if inv.get("deals") is not None:
                        if len(inv["deals"]) > 0:
                            for deal in inv["deals"]:
                                date = deal["attributes"]["announced-date"]
                                if date is None:
                                    continue
                                if "2023" in date or "2024" in date:
                                    total_team_with_all_fields_and_2324 += 1
                                    break

    if inv.get("deals") is not None:
        if len(inv["deals"]) > 0:
            total_deals += 1
            for deal in inv["deals"]:
                date = deal["attributes"]["announced-date"]
                if date is None:
                    continue
                if "2023" in date or "2024" in date:
                    total_23_24_deals += 1
                    total_team_with_all_fields_and_2324_profiles.append(inv)
                    k += 1
                    break

    stages = inv["attributes"]["stages"]
    for stage in stages:
        if stage.lower() in total_by_type:
            total_by_type[stage.lower()] += 1
        else:
            total_by_type[stage.lower()] = 1
    total_investors += 1

print("Total investors - ", total_investors)
print("Investors with avatar - ", total_avatar)
print("Investors with description - ", total_description)
print("Investors with team - ", total_team)
print('Investors with team and avatar, description, and stages ("early stage", "pre-seed", "seed", "accelerator") - ', total_team_with_all_fields)
print('  with 2023-2024 fields - ', total_team_with_all_fields_and_2324)
print("Investors with deals - ", total_deals)
print("Investors with deals in 2023-2024 - ", total_23_24_deals)
print("---")
print("Investors by type:")
pprint(total_by_type)

with open("readyforprod.json", "w") as f:
    json.dump(total_team_with_all_fields_and_2324_profiles, f)
