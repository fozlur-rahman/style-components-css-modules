import "./App.css";
import Text from "./components/Text";
import { CardContainer, Container } from "./components/styles/Container.style";

function App() {
    return (
        <>
            <h1>create yopur best app</h1>
            <div className="">
                <Text />
            </div>

            <Container>
                <CardContainer>
                    <h1>hello</h1>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Temporibus id explicabo aperiam iste nobis sint ipsum mollitia,
                        adipisci quidem consequatur?
                    </p>
                </CardContainer>
                <CardContainer>
                    <h1>hello</h1>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Temporibus id explicabo aperiam iste nobis sint ipsum mollitia,
                        adipisci quidem consequatur?
                    </p>
                </CardContainer>
                <CardContainer>
                    <h1>hello</h1>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Temporibus id explicabo aperiam iste nobis sint ipsum mollitia,
                        adipisci quidem consequatur?
                    </p>
                </CardContainer>
            </Container>
        </>
    );
}

export default App;
