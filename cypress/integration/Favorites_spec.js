describe('Favorites should be recorded', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://www.dnd5eapi.co/api/monsters/manticore', {
      statusCode: 201,
      body: {
        "index": "manticore",
        "name": "Manticore",
        "size": "Large",
        "type": "monstrosity",
        "subtype": null,
        "alignment": "lawful evil",
        "armor_class": 14,
        "hit_points": 68,
        "hit_dice": "8d10",
        "languages": "",
        "challenge_rating": 3,
        "xp": 700,
        "special_abilities": [
          {
            "name": "Tail Spike Regrowth",
            "desc": "The manticore has twenty-four tail spikes. Used spikes regrow when the manticore finishes a long rest."
          }
        ],
        "actions": [
          {
            "name": "Multiattack",
            "desc": "The manticore makes three attacks: one with its bite and two with its claws or three with its tail spikes.",
            "options": {
              "choose": 1,
              "from": [
                [
                  {
                    "name": "Bite",
                    "count": 1,
                    "type": "melee"
                  },
                  {
                    "name": "Claw",
                    "count": 2,
                    "type": "melee"
                  }
                ],
                [
                  {
                    "name": "Tail Spike",
                    "count": 3,
                    "type": "ranged"
                  }
                ]
              ]
            },
            "damage": []
          },
          {
            "name": "Bite",
            "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) piercing damage.",
            "attack_bonus": 5,
            "damage": [
              {
                "damage_type": {
                  "index": "piercing",
                  "name": "Piercing",
                  "url": "/api/damage-types/piercing"
                },
                "damage_dice": "1d8+3"
              }
            ]
          },
          {
            "name": "Claw",
            "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage.",
            "attack_bonus": 5,
            "damage": [
              {
                "damage_type": {
                  "index": "slashing",
                  "name": "Slashing",
                  "url": "/api/damage-types/slashing"
                },
                "damage_dice": "1d6+3"
              }
            ]
          },
          {
            "name": "Tail Spike",
            "desc": "Ranged Weapon Attack: +5 to hit, range 100/200 ft., one target. Hit: 7 (1d8 + 3) piercing damage.",
            "attack_bonus": 5,
            "damage": [
              {
                "damage_type": {
                  "index": "piercing",
                  "name": "Piercing",
                  "url": "/api/damage-types/piercing"
                },
                "damage_dice": "1d8+3"
              }
            ]
          }
        ],
        "url": "/api/monsters/manticore"
      }
    })
    cy.visit('http://localhost:3000/');
  });
  it('Should navigate to creature, add to favorites', () => {
    cy.get('.CR3-nav').click()
    cy.get('.creature-container').contains('Manticore')

    cy.visit('http://localhost:3000/creatures/manticore/details')
    cy.get('.add-fav-btn').click()
    cy.get('.fav-nav').click()
    cy.get('.all-favs').contains('Manticore')

  });


})