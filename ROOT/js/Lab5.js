let currentStage = 0; // хранит номер текущего этапа игры
let previousChoice = 0; // сохраняет, какой выбор сделал игрок на предыдущем шаге

// Функция для начала игры
function startGame() {
    document.getElementById('game-output').innerHTML = `Вы – полковник Костенко, опытный, но измотанный постоянной работой полковник уголовного розыска. Вам поступает звонок из Магадана – там найдено тело, расчленённое и оставленное в мешке без головы и кистей рук. Вас срочно командируют для расследования, несмотря на ваш личный кризис: отношения с женой на грани развода из-за постоянного отсутствия дома. Вам назначают помощника, лейтенанта Тадаву, молодого и амбициозного оперативника, которому вы пока не доверяете. Прибыв вы думаете что сделать первым.<br><button onclick="choosePath(1)">Осмотреться в городе</button><button onclick="choosePath(2)">Пойти в гостиницу спать</button>`;
    document.getElementById('game-image').src ="img/kandinsky-download-1732718997314.png"; // Путь к изображению полковника Костенко
    currentStage = 1; // Устанавливает начальный этап игры
    previousChoice = 0; // Сброс предыдущего выбора
    document.getElementById('start-button').style.display = 'none'; // Скрыть кнопку "Начать игру"
}

// Функция для перехода к следующему этапу
function nextStage() {
    switch (currentStage) {
        case 1:
            if (previousChoice === 1) {
                document.getElementById('game-output').innerHTML = `Вы ходите по городу, изучая его, заходя в различные места и тут вы захотели пойти в магазин.<br><button onclick="choosePath(3)">Купить курицу и рис</button><button onclick="choosePath(4)">Купить доширак и воды</button>`;
                document.getElementById('game-image').src ="img/kandinsky-download-1732719303802.png";
            } else {
                document.getElementById('game-output').innerHTML = `Придя в гостиницу вы сразу ложитесь спать.<br>После того как вы проснулись, вы собираетесь и выезжаете на автомобиле вместе с помощником на место преступления.<br><button onclick="choosePath(5)">Поехать налево</button><button onclick="choosePath(6)">Поехать направо</button>`;
                document.getElementById('game-image').src = 'img/kandinsky-download-1732719592838.png';
            }
            break;
        case 2:
            if (previousChoice === 3) {
                document.getElementById('game-output').innerHTML = `Купив курицу и рис вы пошли в гостиницу готовить ужин.<br>Концовка.<br><button onclick="startGame()">Начать заново</button>`;
                document.getElementById('game-image').src = 'img/kandinsky-download-1732719418368.png';
            } else if (previousChoice === 4) {
                document.getElementById('game-output').innerHTML = `Купив доширак и воды, вы придя в гостиницу заварили воду и доширак.<br>Концовка.<br><button onclick="startGame()">Начать заново</button>`;
                document.getElementById('game-image').src = 'img/kandinsky-download-1732719418368.png';
            } else if (previousChoice === 5) {
                document.getElementById('game-output').innerHTML = `Поехав налево, вы свернули не туда и завалили поездку, тем самым не добравшись до места преступления.<br>Концовка.<br><button onclick="startGame()">Начать заново</button>`;
                document.getElementById('game-image').src = 'img/kandinsky-download-1732719655233.png';
            } else if (previousChoice === 6) {
                document.getElementById('game-output').innerHTML = `Поехав направо, вы добрались до места преступления.<br><button onclick="choosePath(7)">Начать поиски у озера</button><button onclick="choosePath(8)">Начать поиски в лесу</button>`;
                document.getElementById('game-image').src = 'img/9f80e06b591026b34ffbe8e1dfa1530a.webp';
            }
            break;
        case 3:
            if (previousChoice === 7 || previousChoice === 8) {
                document.getElementById('game-output').innerHTML = `Начав поиски у озера, вы с группой смогли найти топор в мешке, который был закопан под деревом около озера и также вы обнаружили расчлененный труп в мешке без головы и кистей рук.<br><button onclick="choosePath(9)">Отправить всё на экспертизу</button>`;
                document.getElementById('game-image').src = 'img/photo_2024-11-27_22-13-46.jpg';
            }
            break;
        case 4:
            if (previousChoice === 9) {
                document.getElementById('game-output').innerHTML = `Эксперты нашли на топоре кровь и установили, что она принадлежит некому Иванову.<br><button onclick="choosePath(11)">Разбираться дальше в имеющихся уликах</button><button onclick="choosePath(12)">Искать ещё какие-либо улики</button>`;
                document.getElementById('game-image').src = 'img/krovavyj_topor_0.jpg';
            }
            break;
        case 5:
            if (previousChoice === 11) {
                document.getElementById('game-output').innerHTML = `Из улик у вас тело и топор, с этим особо ничего не сделать, но тут у вас раздаётся звонок.<br><button onclick="choosePath(13)">Взять трубку</button>`;
                document.getElementById('game-image').src = 'img/93e34966041a711aee86ab79e3659da0.jpg';
            } else if (previousChoice === 12) {
                document.getElementById('game-output').innerHTML = `Вы обнаружили недалеко от этого места старую фотографию мужчины и возвращаетесь в город.<br><button onclick="choosePath(14)">Пытаться установить личность на фото</button>`;
                document.getElementById('game-image').src = 'img/kandinsky-download-1732721329268.png';
            }
            break;
        case 6:
            if (previousChoice === 13) {
                document.getElementById('game-output').innerHTML = `На другом конце провода вам звонит майор и сообщает, что произошло идентичное убийство в Якутске, дав вам приказ отправиться туда.<br><button onclick="choosePath(15)">Отправиться туда самому</button><button onclick="choosePath(16)">Отправить туда помощника</button>`;
                document.getElementById('game-image').src = 'img/telefon_na_6.jpg';
            } else if (previousChoice === 14) {
                document.getElementById('game-output').innerHTML = `У вас получается установить личность, им оказывается тот же самый Иванов, но пока этого мало.<br>Концовка.<br><button onclick="startGame()">Начать заново</button>`;
                document.getElementById('game-image').src = 'img/kandinsky-download-1732719655233.png';
            }
            break;
        case 7:
            if (previousChoice === 15) {
                document.getElementById('game-output').innerHTML = `Вы отправляетесь в Якутск на самолете и добираетесь туда через полтора часа.<br><button onclick="choosePath(17)">Отправиться сразу на место преступления</button><button onclick="choosePath(18)">Отдохнуть и поехать на следующий день</button>`;
                document.getElementById('game-image').src = 'img/VQ-BEI_(6919052100).jpg';
            } else if (previousChoice === 16) {
                document.getElementById('game-output').innerHTML = `Вы отправляете в Якутск помощника, но он совсем не справляется с задачей, не найдя ничего.<br>Концовка.<br><button onclick="startGame()">Начать заново</button>`;
                document.getElementById('game-image').src = 'img/kandinsky-download-1732719655233.png';
            }
            break;
        case 8:
            if (previousChoice === 17) {
                document.getElementById('game-output').innerHTML = `Вы сразу отправляетесь на место преступления и находите там идентичный труп, также в мешке тело без головы и кистей рук.<br><button onclick="choosePath(19)">Опросить жителей деревушки</button><button onclick="choosePath(20)">Вернуться сразу в город</button>`;
                document.getElementById('game-image').src = 'img/kandinsky-download-1732719860200.png';
            } else if (previousChoice === 18) {
                document.getElementById('game-output').innerHTML = `Вы не проснулись, так как вас зарубил этот самый убийца.<br>Концовка.<br><button onclick="startGame()">Начать заново</button>`;
                document.getElementById('game-image').src = 'img/642f24ee6f1211eeac01363fac71b015_upscaled.jpg';
            }
            break;
        case 9:
            if (previousChoice === 19) {
                document.getElementById('game-output').innerHTML = `Вы опрашиваете жителей и находите важную зацепку, одна из жительниц знакомая этого убийцы.<br><button onclick="choosePath(21)">Разослать фотографию в ориентировку</button>`;
                document.getElementById('game-image').src = 'img/kandinsky-download-1732721264056.png';
            } else if (previousChoice === 20) {
                document.getElementById('game-output').innerHTML = `Сразу вернувшись в город вы не узнаете важной зацепки и на этом ваше расследование заканчивается.<br>Концовка.<br><button onclick="startGame()">Начать заново</button>`;
                document.getElementById('game-image').src = 'img/kandinsky-download-1732719655233.png';
            }
            break;
        case 10:
            if (previousChoice === 21) {
                document.getElementById('game-output').innerHTML = `Разослав ориентировку, к вам приходит один мужчина и говорит, что видел данного человека около 20 минут назад возле заброшенного здания. Вы срываетесь вместе с группой захвата и выдвигаетесь на место, там происходит перестрелка в результате которой, вы раните Иванова и вам удается поймать его.<br>Концовка.<br><button onclick="startGame()">Начать заново</button>`;
                document.getElementById('game-image').src = 'img/kandinsky-download-1732721423890.png'
            }
            break;
    }
    currentStage++;
}

// Функция для выбора пути
function choosePath(path) {
    previousChoice = path; // Сохраняет сделанный выбор
    switch (path) { // Определяет, какой путь был выбран
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
            nextStage(); // переход к следующему этапу
            break;
    }
}

// Добавляем обработчик события для кнопки
document.getElementById('start-button').addEventListener('click', startGame);