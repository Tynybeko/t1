import '.././App.css'
import Banner from '../components/Banner'
import MainContent from '../components/MainContent'
import MainImage from '../components/MainImage'
import Button from '../components/UI/Button'






function App() {

  return (
    <div className='contain'>
     
      <section className='py-25'>
        <div className='home_content_container flex flex-col gap-[150px]'>
          <MainContent
            preTitle="о ресторане"
            title="Food Exxe Relo"
            description="Sed vel ornare ut rhoncus, ac ut nibh. Amet at sit et nibh. In lectus phasellus non ornare eget velit. Facilisi urna, tristique dui, rhoncus, dolor. Tincidunt enim gravida dignissim leo pulvinar sit volutpat nulla vestibulum.
Morbi pellentesque enim massa laoreet vel id. Lectus ac, facilisis neque turpis. Morbi massa enim nullam sem vehicula. Amet quis pellentesque enim porttitor lectus interdum. Nisi, faucibus pharetra at porttitor. Fringilla luctus pretium in viverra. In adipiscing tempor amet malesuada ullamcorper ut sagittis. Dui, scelerisque vulputate risus massa dictum. Cras at quis in eu, faucibus feugiat vel. At."
          />
          <MainContent
            preTitle="меню"
            title="Меню"
            description="At faucibus nullam mauris vitae ut non. Augue libero non nibh nec, et eget erat. Nascetur nunc neque, varius massa aliquam interdum turpis massa. Ac tortor aliquam risus, interdum nisl mauris sit. Ut placerat fermentum pellentesque ac at. Vitae venenatis faucibus urna mi eget vitae quam eu. Euismod sed mauris id turpis iaculis. Erat rutrum dolor, vitae morbi.
            Nunc cras cras aliquet blandit faucibus massa sagittis semper. "
          >
            <div className='flex gap-5 mt-20'>
              <MainImage
                title="Основное меню"
                image="/png/menu.png"
              />
              <MainImage
                title="Барная карта"
                image="/png/menu2.png"
              />
            </div>
          </MainContent>
          <MainContent
            preTitle="доставка"
            title="Служба доставки"
            description="Phasellus diam, ultrices lobortis integer et. Diam, purus vel sagittis, non, a. In risus, venenatis enim vitae mauris aliquet orci. Consectetur nibh interdum nullam ut lobortis eu etiam sem. Et in vitae pellentesque non, lectus orci natoque faucibus suspendisse. Semper aliquam id et ultrices velit donec lacus. In odio sit nibh volutpat cras placerat sit feugiat dignissim. Rutrum et suspendisse tortor, lobortis eleifend in fringilla. Egestas cursus imperdiet cursus dui, nulla id massa. Hendrerit nam enim semper porttitor imperdiet diam semper. Nulla sit etiam cras morbi enim elementum euismod sapien."
          >
            <div className='flex gap-10 justify-center mt-10 '>
              <Button title="Подробнее" />
              <Button title="Условия доставки" variant="initial" />
            </div>
          </MainContent>
        </div>
      </section>
      <footer>

      </footer>
    </div>
  )
}

export default App
