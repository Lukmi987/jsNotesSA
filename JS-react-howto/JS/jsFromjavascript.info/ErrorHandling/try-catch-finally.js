try…catch…finally
If it exists, it runs in all cases:

after try, if there were no errors,
after catch, if there were errors.
try {
  alert( 'try' );
  if (confirm('Make an error?')) BAD_CODE();
} catch (e) {
  alert( 'catch' );
} finally {
  alert( 'finally' );
}

The code has two ways of execution:

If you answer “Yes” to “Make an error?”, then try -> catch -> finally.
If you say “No”, then try -> finally.
The finally clause is often used when we start doing something and want to finalize it in any case of outcome.
--------------------------------------------------------------------
finally and return
The finally clause works for any exit from try..catch.
function func() {

  try {
    return 1;

  } catch (e) {
    /* ... */
  } finally {
    alert( 'finally' );
  }
}
there’s a return in try. In this case, finally is executed just before the control returns to the outer code.
------------------------------------------------------------------------
The try..finally !!!!!!!!!!!11
 construct, without catch clause, is also useful. We apply it when we don’t want to handle errors here (let them fall through), but want to be sure that
processes that we started are finalized.
function func() {
  // start doing something that needs completion (like measurements)
  try {
    // ...
  } finally {
    // complete that thing even if all dies
  }
}
