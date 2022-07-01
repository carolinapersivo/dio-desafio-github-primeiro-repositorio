# Aula prática

#### XAMPP

- Apache - servidor web
- MySQL - banco de dados
- FileZilla - servidor de arquivos
- Mercury - servidor de email
- Tomcat - servidor web

#### Código do index

##### Index1

```php+HTML
<html>
	<head>
		<title>Meu primeiro site em PHP! Woohoo!</title>
	</head>

	<body>
		<?php
			for ($i = 0 ; $i < 10 ; $i++) {
				print("Linha número " . $i . "<br />");
			}
		?>
	</body>
</html>
```

##### Index2

```php+HTML
<html>
	<head>
		<title>Meu primeiro site em PHP! Woohoo!</title>

		<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

		<style type="text/css">
			.linha{
				font-weight: bold;
				color: green;
				padding-left: 10px;
				line-height: 50px;
			}
		</style>
	</head>

	<body>
		<?php
			for ($i = 0 ; $i < 10 ; $i++) {
			print("<span class=\"linha\">Linha número " . $i . "</span><br />");
			}
		?>
	</body>

	<script type="text/javascript">
		$(document).ready(function(){
			alert("Woohoo"!);
		});
	</script>
</html>
```

> Diferença: adicionamos uma classe CSS .linha no texto PHP através de <style type="text/CSS">...</style>  e um código JavaScript no final da página (após carregar a página inteira) através de <script type="text/javascript">...</script>

> Baixamos através do site code.jquery.com as configurações CSS e JS

### Exercício final

- Crie um site utilizando alguma biblioteca JQuery (como Accordion)
