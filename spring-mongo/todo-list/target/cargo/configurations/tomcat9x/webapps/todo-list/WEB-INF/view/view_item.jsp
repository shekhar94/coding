<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page import="academy.learnprogramming.util.Mappings" %>

<html>

<head>
    <title>Todo Items</title>
</head>

<body>
    <div align="center">

        <table border="1" cellpadding="5" modelAttribute="${AttributeNames.TODO_ITEM}">

            <caption>
                <h2> View Item </h2>
            </caption>
            <tr>
                <td><c:out value="${todoItem.id}"/></td>
                <td><c:out value="${todoItem.title}"/></td>
                <td><c:out value="${todoItem.deadline}"/></td>
                <td><c:out value="${todoItem.details}"/></td>
            </tr>


        </table>
        <c:url var="itemsLink" value="${Mappings.ITEMS}" />
        <h2><a href="${itemsLink}">Show Todo Items</a></h2>
    </div>
</body>

</html>