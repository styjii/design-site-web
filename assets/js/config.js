scrollBalise("nav", 50)

// formulaire
formCheking(form.name, 0, "name", /^[A-ZÉÈËÊÎÏ][a-zéèëêîï]+([-'\s][A-ZÉÈËÊÎÏ][a-zéèëêîï])?/)
formCheking(form.email, 1, "email", /^[a-zA-ZÉÈËÊÎÏ][a-zA-Z0-9ÉÈËÊÎÏéèëêîï@.]/)
formCheking(form.subject, 2, "subject", /[a-zA-Z0-9ÉÈËÊÎÏéèëêîï]/)
formCheking(form.messge, 3, "message")

// show error
posError()