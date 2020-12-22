1. componentDidMount:

useEffect(() => {
  axios("https://randomuser.me/api/?results=10")
    .then(data => {
      setUsers(data);
    });
}, []);

[] means the effect doesn’t use any value that participates in React data flow,
and is for that reason safe to apply once


===========

2. componentDidMount && componentDidUpdate:

 useEffect(() => {
   document.title = `You clicked ${count} times`;
 });

===========

3. componentWillUnmount:
- pro cleanupy před odpojením komponenty
- specifikuje se v return funkci useEffectu

useEffect(() => {

    //při každém update props:
    document.title = `You clicked ${count} times`;

   // jen cleanup, při odpojení:
   return function cleanup() {
     ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
   };
 });

============

4. Podmíněné rerenderování: (alternativa k prevProps !=== currentProps):

useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // Only re-run the effect if count changes

---- nebo:

useEffect(() => {
  ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
  return () => {
    ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
  };
}, [props.friend.id]); // Only re-subscribe if props.friend.id changes


===========

Tip - jeden useEffect pro related logic, ale více useEffectů pro separaci rozdílných věcí
