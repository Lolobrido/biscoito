import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";

export default function App() {
    const frases = [
        "Grandes coisas começam com pequenos passos.",
        "Hoje pode ser o começo de algo incrível.",
        "Confie mais no seu processo.",
        "Persistência vence talento quando o talento desiste.",
        "Acredite em você e tudo será possível.",
        "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
        "Não tenha medo de falhar, tenha medo de não tentar.",
        "Acredite no seu potencial e vá além dos seus limites.",
        "A vida é feita de escolhas, escolha ser feliz.",
        "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
        "Cada dia é uma nova oportunidade para recomeçar.",
        "Grandes conquistas exigem paciência e dedicação.",
        "Continue mesmo quando parecer difícil.",
        "Você está mais perto do que imagina.",
        "Um pequeno passo ainda é um passo.",
        "O melhor momento para começar é agora.",
        "Seja paciente com seu próprio crescimento.",
        "Toda jornada começa com uma decisão.",
        "Não desista só porque ainda não deu certo.",
        "Seu esforço de hoje constrói o seu amanhã."
    ];

    const [frase, setFrase] = useState("");
    const [aberto, setAberto] = useState(false);
    const [contador, setContador] = useState(0);
    const [ultimaFrase, setUltimaFrase] = useState("");

    function sortearFrase() {
        let indice;

        // Impede que a mesma frase apareça duas vezes seguidas
        do {
            indice = Math.floor(Math.random() * frases.length);
        } while (frases[indice] === ultimaFrase);

        const novaFrase = frases[indice];

        setFrase(novaFrase);
        setUltimaFrase(novaFrase);
    }

    function abrirBiscoito() {
        sortearFrase();

        setAberto(true);
        setContador(contador + 1);
    }

    function quebrarOutro() {
        sortearFrase();
        setContador(contador + 1);
    }

    function voltarBiscoito() {
        setAberto(false);
        setFrase("");
    }

    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>Biscoito da Sorte</Text>

            <Text style={styles.contador}>
                Biscoitos quebrados: {contador}
            </Text>

            {!aberto ? (
                <>
                    <Pressable
                        onPress={abrirBiscoito}
                        style={styles.areaBiscoito}
                    >
                        <Image
                            source={require("./assets/biscoito.svg")}
                            style={styles.imagem}
                            contentFit="contain"
                        />
                    </Pressable>

                    <Text style={styles.instrucao}>
                        Toque no biscoito para descobrir sua sorte!
                    </Text>

                    {contador >= 5 && (
                        <Text style={styles.mensagemEspecial}>
                            Você já descobriu 5 sortes! Continue tentando!
                        </Text>
                    )}
                </>
            ) : (
                <>
                    <Image
                        source={require("./assets/biscoito-quebrado.svg")}
                        style={styles.imagem}
                        contentFit="contain"
                    />

                    <View style={styles.caixaFrase}>
                        <Text style={styles.tituloFrase}>
                            Sua mensagem:
                        </Text>

                        <Text style={styles.frase}>
                            {frase}
                        </Text>
                    </View>

                    <View style={styles.botoes}>

                        <Pressable
                            style={styles.botaoOutro}
                            onPress={quebrarOutro}
                        >
                            <Text style={styles.textoBotao}>
                                Quebrar outro
                            </Text>
                        </Pressable>

                        <Pressable
                            style={styles.botaoVoltar}
                            onPress={voltarBiscoito}
                        >
                            <Text style={styles.textoBotao}>
                                Voltar
                            </Text>
                        </Pressable>

                    </View>

                    <Text style={styles.ultima}>
                        Última frase sorteada
                    </Text>
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF4E6",
        alignItems: "center",
        paddingTop: 45,
        paddingHorizontal: 20,
    },

    titulo: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#6B3418",
        marginBottom: 8,
        textAlign: "center",
    },

    contador: {
        fontSize: 15,
        color: "#9A5B35",
        marginBottom: 25,
    },

    areaBiscoito: {
        backgroundColor: "#FFE1B8",
        borderRadius: 125,
        padding: 10,
    },

    imagem: {
        width: 250,
        height: 250,
        marginBottom: 20,
    },

    instrucao: {
        fontSize: 17,
        color: "#6B3418",
        marginTop: 10,
        marginBottom: 20,
        textAlign: "center",
    },

    mensagemEspecial: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#C25B00",
        textAlign: "center",
        marginTop: 10,
    },

    caixaFrase: {
        width: "100%",
        backgroundColor: "#FFFFFF",
        padding: 24,
        borderRadius: 18,
        marginBottom: 25,

        // Sombra no Android
        elevation: 4,

        // Sombra no iOS
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 5,
    },

    tituloFrase: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#C25B00",
        textAlign: "center",
        marginBottom: 12,
    },

    frase: {
        fontSize: 19,
        textAlign: "center",
        color: "#6B3418",
        fontStyle: "italic",
        lineHeight: 28,
    },

    botoes: {
        width: "100%",
        alignItems: "center",
        gap: 12,
    },

    botaoOutro: {
        backgroundColor: "#D97706",
        paddingVertical: 14,
        paddingHorizontal: 28,
        borderRadius: 12,
        width: "80%",
    },

    botaoVoltar: {
        backgroundColor: "#6B3418",
        paddingVertical: 12,
        paddingHorizontal: 28,
        borderRadius: 12,
        width: "60%",
    },

    textoBotao: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },

    ultima: {
        marginTop: 20,
        fontSize: 13,
        color: "#9A5B35",
    },
});