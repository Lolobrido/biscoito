import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";

export default function App() {
    const frases = [
        "Grandes coisas começam com pequenos passos.",
        "Hoje pode ser o começo de algo incrível.",
        "Confie mais no seu processo",
        "Persistência vence talento quando o talento desiste.",
        "Acredite em você e tudo será possível.",
        "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
        "Não tenha medo de falhar, tenha medo de não tentar.",
        "Acredite no seu potencial e vá além dos seus limites.",
        "A vida é feita de escolhas, escolha ser feliz.",
        "O único lugar onde o sucesso vem antes do trabalho é no dicionário."
    ];

    const [frase, setFrase] = useState("");
    const [aberto, setAberto] = useState(false);

    function abrirBiscoito() {
        const indice = Math.floor(Math.random() * frases.length);
        const fraseSorteada = frases[indice];
        
        setFrase(fraseSorteada);
        setAberto(true);
    }

    function voltarBiscoito() {
        setAberto(false);
        setFrase("");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Biscoito da Sorte</Text>

            {!aberto ? (
                <>
                    <Pressable onPress={abrirBiscoito}>
                        <Image
                            source={require("./assets/biscoito.svg")}
                            style={styles.imagem}
                            contentFit="contain"
                        />
                    </Pressable>

                    <Text style={styles.instrucao}>Toque no biscoito para quebrar</Text>
                </>
            ) : (
                <>
                    <Image
                        source={require("./assets/biscoito-quebrado.svg")}
                        style={styles.imagem}
                        contentFit="contain"
                    />
                    <View style={styles.caixaFrase}>
                        <Text style={styles.frase}>{frase}</Text>
                    </View>

                    <Pressable style={styles.botao} onPress={voltarBiscoito}>
                        <Text style={styles.textoBotao}>Voltar</Text>
                    </Pressable>
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        paddingTop: 24,
    },

    titulo: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#39210b",
        marginBottom: 30,
    },

    imagem: {
        width: 250,
        height: 250,
        marginBottom: 20,
    },

    instrucao: {
        fontSize: 16,
        color: "#39210b",
        marginBottom: 20,
    },

    caixaFrase: {
        width: "100%",
        backgroundColor: "#f5f5f5",
        padding: 20,
        borderRadius: 16,
        marginBottom: 24,
    },

    frase: {
        fontSize: 18,
        textAlign: "center",
        color: "#39210b",
        fontStyle: "italic",
    },

    botao: {
        backgroundColor: "#ae460e",
        paddingVertical: 14,
        paddingHorizontal: 30,
        borderRadius: 12,
    },

    textoBotao: {
        color: "#fff",
        fontSize: 17,
        fontWeight: "bold",
    },
});