Form will NOT submit (for example on pressing enter) when there is no
submit button present in the form.

Solutions:
https://stackoverflow.com/questions/477691/submitting-a-form-by-pressing-enter-without-a-submit-button

Nejjednodušší asi přidat nečinný button:
<Button type="submit" hidden />

====================

VALIDACE FORMULÁŘE:

https://react-bootstrap.github.io/components/forms/#forms-validation

=====================

Prevent default:
preventDefault() method cancels the event if it is cancelable,
meaning that the default action that belongs to the event will not occur.

For example, this can be useful when:

Clicking on a "Submit" button, prevent it from submitting the form
Clicking on a link, prevent the link from following the URL

Note:
Not all events are cancelable. Use the cancelable property to find out if an event is cancelable.

Note:
The preventDefault() method does not prevent further propagation of an event through the DOM.
Use the stopPropagation() method to handle this.

=========================================

Submitting:
Formulář je submitted dvěma způsoby:
a) klikem na tlačítko, které je type="submit" a které je uvnitř formu
b) enterem v inputu formuláře

Dá se to vyřešit také onclick na tlačítku a přiřadit tomu metodu, která provede kontroly atd, ale standardnější je použít submit metody:

handleSubmit(event) {
  event.preventDefault(); //zabrání odeslání formu na server
  event.stopPropagation(); //zabrání poslání eventu do dalších částí DOM
  ... nejaka prace s daty z eventu
  ... zavolání redux akce s daty z eventu
}


<Form onSubmit={event => this.handleSubmit(event)}>
   <Button type="submit">Submit form</Button>
</Form>

==========================================

Validace:
- kontrola a feedback uživateli, jestli  zadal všechny a správné údaje
- html5 obsahuje pseudoselectory "valid" a "invalid"
- každé required field je invalid, pokud je prázdné
- "novalidate"/"noValidate" atribut na Form elementu říká, že formulář se nemá
 validovat při submit; validace se pak řeší programaticky tak, že se v metodě
 handleSubmit provedou nějaké operace a pak se nastavuje form na "validated"
 pomocí state property; vhodné pro případy, kdy nad tím chceme mít větší kontrolu,
 pro bootstrap formuláře apod.


handleSubmit(event) {
  const form = event.currentTarget;
  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
  }
  this.setState({ validated: true });

  ....

<Form
      noValidate
      validated={validated}
      onSubmit={e => this.handleSubmit(e)}
    >
