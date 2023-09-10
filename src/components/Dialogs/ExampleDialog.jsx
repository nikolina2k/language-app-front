const storyData = {
    "park":
      {
        "dialog": "The protagonist, Ayşe, was taking a walk in the city park. Suddenly, her eyes were drawn to a young man sitting on a bench, Emir. A romantic connection was beginning to form between Ayşe and Emir.",
        "options": [
          {
            "option": "1",
            "text": "I want to say hello to Emir and introduce myself.",
            "result": "introduce"
          },
          {
            "option": "2",
            "text": "I'd like to smile politely at Emir.",
            "result": "smile"
          },
          {
            "option": "3",
            "text": "I want to wait a bit longer before approaching Emir.",
            "result": "wait"
          }
        ]
      },
      "introduce":
      {
        "dialog": "Ayşe gathered her courage and approached Emir. She said, 'Hello, I'm Ayşe. What are you doing here?' They engaged in a short conversation, and as time passed, they grew closer to each other.",
        "options": [
          {
            "option": "1",
            "text": "I want to tell Emir more about myself.",
            "result": "tell_more"
          },
          {
            "option": "2",
            "text": "I'd like to ask Emir to share more about himself.",
            "result": "ask_more"
          },
          {
            "option": "3",
            "text": "I want to make a romantic gesture for Emir.",
            "result": "romantic_gesture"
          }
        ]
      },
      "smile":
      {
        "dialog": "Ayşe smiled politely, and Emir responded with a smile. They made eye contact, and a romantic atmosphere began to develop.",
        "options": [
          {
            "option": "1",
            "text": "I want to tell Emir more about myself.",
            "result": "tell_more"
          },
          {
            "option": "2",
            "text": "I'd like to ask Emir to share more about himself.",
            "result": "ask_more"
          },
          {
            "option": "3",
            "text": "I want to make a romantic gesture for Emir.",
            "result": "romantic_gesture"
          }
        ]
      },
      "wait":
      {
        "dialog": "Ayşe decided to wait a little longer. Emir continued to look at her, expecting her to approach. They both seemed to be drawn to each other.",
        "options": [
          {
            "option": "1",
            "text": "I want to say hello to Emir and introduce myself.",
            "result": "introduce"
          },
          {
            "option": "2",
            "text": "I'd like to smile politely at Emir.",
            "result": "smile"
          },
          {
            "option": "3",
            "text": "I want to wait a bit longer before approaching Emir.",
            "result": "wait"
          }
        ]
      },
      "tell_more":
      {
        "dialog": "As Ayşe and Emir spent more time together, their love continued to blossom. Their romantic outings in the park turned into adventurous journeys exploring the city, sharing laughter and dreams along the way.",
        "options": [
          {
            "option": "1",
            "text": "Ayşe and Emir decide to have their fortunes told.",
            "result": "fortunes_told"
          },
          {
            "option": "2",
            "text": "They decide to politely decline and continue their day.",
            "result": "continue_day"
          }
        ]
      },
      "ask_more":
      {
        "dialog": "Ayşe expressed her interest in learning more about Emir. Emir shared some details about himself, helping them get to know each other better. This conversation deepened their connection.",
        "options": [
          {
            "option": "1",
            "text": "Ayşe and Emir decide to have their fortunes told.",
            "result": "fortunes_told"
          },
          {
            "option": "2",
            "text": "They decide to politely decline and continue their day.",
            "result": "continue_day"
          }
        ]
      },
      "romantic_gesture":
      {
        "dialog": "Ayşe decided to make a romantic gesture. She approached Emir with a flower and handed it to him with a smile. Emir, with eyes filled with happiness, thanked her for the sweet gesture. This romantic act further intensified the chemistry between them.",
        "options": [
          {
            "option": "1",
            "text": "Ayşe and Emir decide to have their fortunes told.",
            "result": "fortunes_told"
          },
          {
            "option": "2",
            "text": "They decide to politely decline and continue their day.",
            "result": "continue_day"
          }
        ]
      },
      "fortunes_told":
      {
        "dialog": "Curiosity got the best of Ayşe and Emir. They both agreed to have their fortunes told. The fortune teller took their hands, closed her eyes, and began to speak of their future together. She predicted a life filled with love, adventure, and happiness.",
        "options": [
          {
            "option": "1",
            "text": "They leave the tent with smiles on their faces, feeling even more connected and certain about their love for each other.",
            "result": "happy_end"
          }
        ]
      },
      "continue_day":
      {
        "dialog": "Ayşe and Emir politely declined the offer, believing that their love was already written in the stars. They continued their day, holding hands and cherishing the moments they shared.",
        "options": [
          {
            "option": "1",
            "text": "As time passed, their love story deepened, and they decided to take the next step in their relationship. They got engaged in a beautiful garden ceremony surrounded by friends and family, solidifying their commitment to each other.",
            "result": "engagement_end"
          }
        ]
      },
      "happy_end":
      {
        "dialog": "No matter the path they chose, Ayşe and Emir's love story remained a testament to the power of love and the beautiful adventures that life could offer when two hearts came together as one."
      },
      "engagement_end":
      {
        "dialog": "No matter the path they chose, Ayşe and Emir's love story remained a testament to the power of love and the beautiful adventures that life could offer when two hearts came together as one."
      }
}


export default storyData;