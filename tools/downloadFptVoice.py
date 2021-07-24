import requests
import urllib
import random
import json
import urllib.request
import time
import sys

url = "https://speech.openfpt.vn/speech"


def get_mp3_url_of(content, speed=0):
    obj = {
        "voice-type": "new",
        "text": content,
        "gender": random.choice(["banmai", "leminh", "myan", "lannhi"]),
        "speed": speed
    }
    res = requests.post(url, data=obj)
    if res.status_code == 200:
        res = json.loads(res.text)
        print(res["Url"])
        time.sleep(10)
        return res["Url"]
    return "notfound"
        #print('Downloaded {}'.format(res["Url"]))
        #urllib.request.urlretrieve(x["Url"], "audio_topic_999.mp3")        

def save_file(src_url, dest_path):
    urllib.request.urlretrieve(src_url, dest_path)

def save_mp3_from_content(content, dest_path):
    url = get_mp3_url_of(content)
    if url != "notfound":
        save_file(url, dest_path)
        print("Saved {} to {}".format(url, dest_path))

def get_mp3_from_txt_file(txt_file, dest_dir, topic, output_file, start_index_name):
    with open(txt_file, encoding="utf8") as file:
        texts = file.readlines()
    urls = []
    data = {}
    data[topic] = []
    for text in texts:
#         src_url = get_mp3_url_of(text)
#         urls.append(src_url)
        print("index: ",start_index_name)
        saved_file_path = dest_dir + "/audio_topic_" + str(start_index_name) + ".mp3"
        print("text: ", text)
        save_mp3_from_content(text, saved_file_path)
        
        id_ = start_index_name
        data_json = make_json(id_, saved_file_path, topic)
        data[topic].append(data_json)
        
        
        start_index_name += 1
    print(urls)
    with open(output_file, 'w') as outfile:
        json.dump(data, outfile)

def make_json(id_, src, topic): 

    json_element = {
            'id': '',
            "question": 'Chọn chủ đề thích hợp cho đoạn hội thoại dưới:',
            "src": '',
            "answers": [
                { "text": 'Thể thao', "correct": False},
                { "text": 'Sức khỏe', "correct": False},
                { "text": 'Chính trị', "correct": False},
                { "text": 'Xã hội', "correct": False},
                { "text": 'Thuộc một chủ đề khác', "correct": False}
              ]
          }

    json_element['id'] = str(id_)
    json_element['src'] = str(src)

    for answer in json_element["answers"]:
        if answer["text"] == topic:
            answer["correct"] = True
        else:
            answer["correct"] = False
            
    return json_element

if __name__ == "__main__":
    input_file = sys.argv[1] #path to file contains lines os text
    dest_dir = sys.argv[2] #destination directory to store audio
    topic = "Xã hội" #topic about audios' context
    start_index = int(sys.argv[3]) #index that included in file name
    output_file = sys.argv[4]
    get_mp3_from_txt_file(input_file, dest_dir, topic, output_file, start_index)