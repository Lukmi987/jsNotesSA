setState({}) byl async a vracel promise, takže šlo udělat něco jako:

setState({}).then(() => console.log("změněno"));

-------

U hooks se to ale dělá jinak, useState totiž nevrací promise:

const [ actualPage, setActualPage ] = useState(1);

useEffect(() => { console.log("změněno")}, [actualPage])
