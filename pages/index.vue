<script setup>
import { ref } from "vue";
import ModalAppl from "@/components/ModalAppl.vue";

const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};
</script>

<template>
  <div class="overflow-hidden">
    <div
      class="flex flex-col md:flex-row bg-gray-200 h-full w-screen px-4 md:px-32"
    >
      <div
        class="flex flex-col items-start justify-center text-3xl md:text-5xl text-black w-full md:w-1/2 pr-4 md:pr-8"
      >
        <h1 class="mb-4 font-bold mt-10">Наследственные дела и споры</h1>
        <div class="mt-4 text-lg md:text-2xl">
          <div class="m-4 md:m-8">
            В нашем юридическом центре мы понимаем, что вопросы наследства могут
            быть сложными и эмоционально трудными. Наша команда опытных юристов
            готова предоставить вам профессиональную помощь в решении
            наследственных дел и споров. Мы предлагаем комплексные консультации,
            поддержку на всех этапах процесса и защиту ваших прав. Свяжитесь с
            нами сегодня, чтобы обсудить вашу ситуацию и получить
            квалифицированную юридическую помощь.
          </div>
          <br />
          <button
            class="mx-auto md:ml-12 my-6 bg-red-500 border border-white rounded-3xl text-white p-3 text-lg md:text-xl"
          >
            УЗНАТЬ ПОБОЛЬШЕ
          </button>
        </div>
      </div>
      <div
        class="w-full md:w-1/2 flex items-center justify-center order-1 md:order-2"
      >
        <img
          src="~/public/123.png"
          alt="img"
          class="object-cover mt-6 w-full h-auto"
        />
      </div>
    </div>

    <div class="flex flex-col items-center bg-white">
      <h2
        class="bg-white text-center text-gray-800 my-8 font-black text-2xl md:text-3xl mb-4"
      >
        Широкий выбор услуг, которые мы предлагаем
      </h2>
      <div
        class="flex flex-col md:flex-row bg-white w-full max-w-5xl justify-between px-4 md:px-8"
      >
        <div class="flex flex-col items-start text-black w-full md:w-1/2">
          <img
            src="~/public/pngwingcom.png"
            alt="img"
            class="object-cover mb-4 w-full h-auto"
          />
          <div class="ml-0 md:ml-8">
            <h1 class="text-xl md:text-2xl text-black mt-2">
              Оформление наследства
            </h1>
            <ul class="list-disc list-inside">
              <li class="mt-1">
                Подготовка необходимых документов для оформления наследства
                (заявления, свидетельства и т.д.).
              </li>
              <li class="mt-1">
                Представление интересов клиентов в нотариальных конторах.
              </li>
            </ul>
            <h1 class="text-xl md:text-2xl text-black mt-4">
              Оспаривание завещаний
            </h1>
            <ul class="list-disc list-inside">
              <li class="mt-1">
                Консультации и помощь в делах по оспариванию завещаний.
              </li>
              <li class="mt-1">
                Представительство в суде при оспаривании завещаний.
              </li>
            </ul>
            <h1 class="text-xl md:text-2xl text-black mt-4">
              Помощь в сборе документов
            </h1>
            <ul class="list-disc list-inside">
              <li class="mt-1">
                Сбор необходимых документов для оформления наследства
                (свидетельства о смерти, документы на имущество и т.д.).
              </li>
              <li class="mt-1">
                Проверка правоустанавливающих документов на имущество.
              </li>
            </ul>
            <h1 class="text-xl md:text-2xl text-black mt-4">
              Разработка стратегии наследования
            </h1>
            <ul class="list-disc list-inside">
              <li class="mt-1">
                Консультирование по оптимизации наследственных планов для
                минимизации налоговых последствий.
              </li>
              <li class="mt-1">
                Помощь в составлении наследственного договора.
              </li>
            </ul>
          </div>
        </div>
        <div class="flex flex-col items-center w-full md:w-1/2">
          <div class="text-black mt-4">
            <h1 class="text-xl md:text-2xl text-black mt-4">
              Оформление наследства
            </h1>
            <ul class="list-disc list-inside">
              <li class="mt-1">
                Подготовка необходимых документов для оформления наследства
                (заявления, свидетельства и т.д.).
              </li>
              <li class="mt-1">
                Представление интересов клиентов в нотариальных конторах.
              </li>
            </ul>
            <h1 class="text-xl md:text-2xl text-black mt-4">
              Оспаривание завещаний
            </h1>
            <ul class="list-disc list-inside">
              <li class="mt-1">
                Консультации и помощь в делах по оспариванию завещаний.
              </li>
              <li class="mt-1">
                Представительство в суде при оспаривании завещаний.
              </li>
            </ul>
            <h1 class="text-xl md:text-2xl text-black mt-4">
              Помощь в сборе документов
            </h1>
            <ul class="list-disc list-inside">
              <li class="mt-1">
                Сбор необходимых документов для оформления наследства
                (свидетельства о смерти, документы на имущество и т.д.).
              </li>
              <li class="mt-1">
                Проверка правоустанавливающих документов на имущество.
              </li>
            </ul>
          </div>
          <div>
            <img
              src="~/public/WorkWoman.jpeg"
              alt="img"
              class="mt-4 w-72 h-auto"
            />
          </div>
        </div>
      </div>
    </div>

    <div
      class="flex flex-col md:flex-row bg-white h-screen w-screen items-center justify-between px-4 md:px-16"
    >
      <div class="w-full text-2xl text-black">
        <div class="flex flex-col">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="flex flex-col bg-red-200 border rounded-lg mb-8 p-4">
              <h1 class="text-center font-bold">Наша миссия</h1>
              <div class="px-4 mb-4">
                обеспечить качественную и доступную юридическую поддержку в
                области наследственных дел и споров
              </div>
              <div class="flex justify-end">
                <img
                  src="~/public/MainSticker.png"
                  alt="img"
                  class="object-cover w-24 h-24 md:w-auto md:h-auto"
                />
              </div>
            </div>

            <div class="flex flex-col bg-amber-100 border rounded-lg p-4">
              <h1 class="text-center font-bold">Наша стратегия</h1>
              <div class="px-4 mb-4">
                Мы предлагаем индивидуальный подход к каждому наследственному
                делу, обеспечивая тщательный анализ и прозрачность на всех
                этапах. Наша цель — находить мирные решения споров, минимизируя
                конфликты и защищая ваши права.
              </div>
              <!-- <div class="flex justify-end">
            <img
              src="~/public/Comment.png"
              alt="img"
              class="object-cover"
            />
          </div> -->
            </div>

            <div class="flex items-center mt-8 col-span-1 md:col-span-2">
              <div class="text-9xl">❟❟</div>
              <div class="flex flex-col ml-4">
                Компания ЮДЛ демонстрирует высокую эффективность благодаря
                слаженной команде профессионалов, современным технологиям и
                индивидуальному подходу к каждому клиенту, что позволяет
                достигать отличных результатов и удовлетворять потребности
                клиентов.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="grid grid-cols-3 gap-x-3 h-full w-screen px-96 bg-gray-200 text-black"
    >
      <div>
        <img src="~/public/office.jpg" alt="img" class="" />
      </div>
      <div class="flex items-center justify-center">
        <div class="bg-white border rounded-lg w-60 h-full">
          <div class="flex items-center justify-center mt-6">
            <div
              class="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center"
            >
              <img src="~/public/strategy.png" alt="img" class="w-10 h-10" />
            </div>
          </div>

          <div class="text-center mb-2 font-bold text-2xl">
            <h1>Полученные результаты</h1>
          </div>
          <div class="px-10 text-xl">
            Наша команда успешно разрешила множество наследственных дел,
            обеспечивая нашим клиентам эффективные решения
          </div>
          <div class="flex items-center justify-center my-6">
            <button class="items-center text-center justify-center">
              Более
            </button>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-center">
        <div class="bg-white border rounded-lg w-60 h-full">
          <div class="flex items-center justify-center mt-6">
            <div
              class="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center"
            >
              <img src="~/public/briefcase.png" alt="img" class="w-10 h-10" />
            </div>
          </div>

          <div class="text-center mb-2 font-bold text-2xl">
            <h1>Экспертиза</h1>
          </div>
          <div class="px-10 text-xl">
            Наша команда имеет значительный опыт в области наследственного
            права, что позволяет нам эффективно работать с различными аспектами
            наследственных дел. Мы понимаем, что каждый случай уникален и
            требует индивидуального подхода
          </div>
          <div class="flex items-center justify-center my-6">
            <button class="items-center text-center justify-center">
              Более
            </button>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-center">
        <div class="bg-white border rounded-lg w-60 h-full">
          <div class="flex items-center justify-center mt-6">
            <div
              class="bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center"
            >
              <img src="~/public/user.png" alt="img" class="w-10 h-10" />
            </div>
          </div>

          <div class="text-center mb-2 font-bold text-2xl">
            <h1>Поддержка</h1>
          </div>
          <div class="px-10 text-xl">
            Наша команда специалистов готова предоставить профессиональную
            консультацию и поддержку на каждом этапе процесса.
          </div>
          <div class="flex items-center justify-center my-6">
            <button class="items-center text-center justify-center">
              Более
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="flex bg-white h-full w-screen items-center justify-center my-10 p-16 text-black"
    >
      <div class="flex flex-col items-center justify-center text-center">
        <div class="font-bold text-2xl mb-4">
          <h1>Обратный звонок</h1>
        </div>
        <div class="px-10 text-xl mb-6">
          Нужна помощь компетентного эксперта? Закажите обратный звонок сегодня
          и получите бесплатную консультацию.
        </div>
        <div>
          <ModalAppl :isOpen="isModalOpen" @close="isModalOpen = false" />

          <div>
            <button
              @click="openModal"
              class="bg-black text-white px-4 py-2 rounded-lg"
            >
              Заказать звонок
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="flex bg-white h-full w-screen items-end justify-end my-10 p-16 text-black"
    >
      <div class="flex flex-col items-start justify-end text-start">
        <img
          src="~/public/group-people-working.jpg"
          alt="img"
          class="w-56 h-32 static"
        />
        <div class="flex items-end justify-end w-full text-3xl">
          <h1 class="ml-auto">Наши достижения</h1>
        </div>
      </div>
      <div class="flex px-20">
        <div class="flex flex-row px-10">
          В нашей компании мы гордимся теми успехами, которые достигли за время
          своего существования. Ниже представлены ключевые достижения, которые
          подтверждают нашу репутацию и высокий уровень работы.
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            class="flex flex-col bg-gray-400 border rounded-lg p-4 w-full h-auto items-center"
          >
            <img src="~/public/userALL.png" alt="img" class="mb-2 w-16 h-16" />
            <div class="flex flex-col items-center">
              <div class="text-center break-words overflow-hidden">Клиенты</div>
              <div class="text-lg font-bold break-words overflow-hidden">
                10,813
              </div>
            </div>
          </div>
          <div
            class="flex flex-col bg-gray-400 border rounded-lg p-4 w-full h-auto items-center"
          >
            <img src="~/public/feedb.png" alt="img" class="mb-2 w-16 h-16" />
            <div class="flex flex-col items-center justify-center text-center">
              <div class="text-center break-words overflow-hidden">
                Положительных отзывов
              </div>
              <div class="text-lg font-bold break-words overflow-hidden">
                8345
              </div>
            </div>
          </div>
          <div
            class="flex flex-col bg-gray-400 border rounded-lg p-4 w-full h-auto items-center"
          >
            <img src="~/public/pngwing.png" alt="img" class="mb-2 w-16 h-16" />
            <div class="flex flex-col items-center text-center">
              <div class="text-center break-words overflow-hidden">
                Привлеченные эксперты
              </div>
              <div class="text-lg font-bold break-words overflow-hidden">
                2342
              </div>
            </div>
          </div>
          <div
            class="flex flex-col bg-gray-400 border rounded-lg p-4 w-full h-auto items-center"
          >
            <img src="~/public/pngwing1.png" alt="img" class="mb-2 w-16 h-16" />
            <div class="flex flex-col items-center text-center">
              <div class="text-center break-words overflow-hidden">
                Благодарственных писем
              </div>
              <div class="text-lg font-bold break-words overflow-hidden">
                150
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="flex bg-white h-full w-screen items-center justify-center my-10"
    >
      <div
        class="flex flex-col items-center justify-center text-center text-black"
      >
        <div
          class="flex items-center justify-center text-center font-bold text-3xl"
        >
          <div class="font-bold text-3xl mb-2">
            <h1>Наши документы</h1>
          </div>
        </div>
        <div class="flex mx-8 px-10 mb-4">
          <div class="border border-red-500 rounded-lg px-4 mr-2">
            <button>все</button>
          </div>
          <div class="border border-red-500 rounded-lg px-4 mr-2">
            <button>экспрус</button>
          </div>
          <div class="border border-red-500 rounded-lg px-4 mr-2">
            <button>сро</button>
          </div>
          <div class="border border-red-500 rounded-lg px-4">
            <button>прочее</button>
          </div>
        </div>

        <div class="lg:px-4">
          <div class="flex mb-4">
            <div class="flex flex-col items-center mb-4">
              <img src="~/public/download.png" alt="img" class="" />
              <div class="bg-gray-400 text-white text-center p-2">
                Сертификат
              </div>
            </div>
            <div class="flex flex-col items-center mb-4">
              <img src="~/public/download.png" alt="img" class="" />
              <div class="bg-gray-400 text-white text-center p-2">
                Сертификат
              </div>
            </div>
            <div class="flex flex-col items-center mb-4">
              <img src="~/public/download.png" alt="img" class="" />
              <div class="bg-gray-400 text-white text-center p-2">
                Сертификат
              </div>
            </div>
          </div>
        </div>

        <div class="border border-red-500 rounded-lg px-4">
          <button>посмотореть все</button>
        </div>
      </div>
    </div>

    <div
      class="flex bg-white h-full w-screen items-center justify-center my-10"
    >
      <div
        class="flex flex-col items-center justify-center text-center text-black"
      >
        <div
          class="flex flex-col items-start justify-start text-left font-bold mb-4"
        >
          <div class="font-bold text-2xl">
            <h1>Судебная практика</h1>
          </div>
        </div>
        <div class="flex flex-col">
          <div
            class="flex flex-col mb-2 px-40 pr-[600px] text-justify items-start"
          >
            В данной секции представлены примеры судебной практики, касающейся
            наследственных дел и споров. Здесь собраны решения судов общей
            юрисдикции и арбитражных судов, касающиеся различных аспектов
            наследственного права, включая оспаривание завещаний, раздел
            наследства, обязательные доли и другие важные вопросы.
          </div>

          <div class="absolute right-1 top-1/2 transform -translate-y-1/2">
            <img src="~/public/handshake.png" alt="img" class="w-48 h-48" />
          </div>

          <div
            class="flex flex-col mb-2 px-40 pl-52 pr-[500px] text-justify items-start"
          >
            Судебная практика в области наследственных дел демонстрирует, как
            суды применяют нормы законодательства на практике, а также как
            различные факторы влияют на исход дел. Например, в случаях
            оспаривания завещаний суды часто рассматривают вопросы о
            дееспособности завещателя, законности давления на него и
            правильности оформления документа.
          </div>

          <div
            class="flex flex-col mb-2 px-40 pl-72 pr-[400px] text-justify items-start"
          >
            Важно отметить, что опытные адвокаты и юристы могут существенно
            повлиять на ход дела, используя судебные прецеденты и аргументы,
            основанные на практике. Это может привести к назначению
            дополнительных экспертиз или пересмотру ранее принятых решений.
          </div>
        </div>
        <div class="flex mb-4">
          <div class="flex flex-row mb-4">
            <img src="~/public/download.png" alt="img" class="" />
          </div>
          <div class="flex flex-row mb-4">
            <img src="~/public/download.png" alt="img" class="" />
          </div>
          <div class="flex flex-row mb-4">
            <img src="~/public/download.png" alt="img" class="" />
          </div>
        </div>
        <div class="border border-red-500 rounded-lg px-4 mt-6">
          <button>Посмотреть все</button>
        </div>
      </div>
    </div>

    <div
      class="flex bg-white h-full w-screen items-center justify-center my-10 text-black"
    >
      <div class="flex flex-col w-full max-w-6xl">
        <div
          class="flex flex-row bg-white border-2 border-gray-200 rounded-lg px-4"
        >
          <div
            class="flex flex-col items-center justify-center text-center p-4 w-1/4"
          >
            <div class="flex flex-col text-left">
              <div class="font-bold">Кирилл</div>
              <div class="text-sm mb-1">Тех. Поддержка</div>
            </div>
          </div>
          <div class="flex-grow flex flex-col justify-center p-4">
            <h1 class="font-bold text-3xl mb-1">Кто может быть наследником?</h1>
            <div class="mt-1 max-w-md">
              Наследниками могут быть как родственники (по закону), так и лица,
              указанные в завещании. Круг наследников зависит от степени родства
              и наличия завещания.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="flex bg-white h-full w-screen items-center justify-center my-10"
    >
      <div class="flex flex-col w-full max-w-6xl">
        <div class="flex flex-row">
          <div class="flex-1 relative">
            <img
              src="~/public/buildings.jpg"
              alt="img"
              class="h-full w-full object-cover"
            />
            <div
              class="absolute top-0 left-0 bg-black bg-opacity-50 w-full h-full flex flex-col text-white p-8"
            >
              <h1 class="font-bold text-3xl mb-4">Связаться с нами</h1>
              <div class="text-xl mb-2">
                ЕСТЬ ПРОБЛЕМЫ ? ПРОСТО НАПШИТЕ НАМ СВОЕ СООБЩЕНИЕ!
              </div>
              <div class="mb-4">
                <div>Улица: Ул.Пушкина ул.42</div>
                <div>Телефон: 8 (900) 000 00-00</div>
              </div>
              <div>
                <div>Соц. Сети</div>
              </div>
            </div>
          </div>
          <div class="flex-1 flex flex-col justify-center p-8 text-black">
            <h1 class="font-bold text-3xl mb-4">Связаться</h1>
            <div>
              У вас есть вопрос? Заполните форму ниже, чтобы связаться с нашей
              командой.
            </div>
            <form>
              <div>
                <b>Ваша почта:</b><br />
                <input type="text" size="40" class="border-2 border-black" />
              </div>
              <div>
                <b>Имя:</b><br />
                <input
                  type="text"
                  size="40"
                  class="border-2 border-black mb-4"
                />
              </div>
              <div class="bg-black text-white rounded-lg w-32 text-center">
                <button>Отправить</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
