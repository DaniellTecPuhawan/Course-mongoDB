import React, { useState } from 'react';
import styles from './CuestionarioForm.module.css';

const CuestionarioForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    fechaNacimiento: '',
    sexo: '',
    email: '',
    frecuenciaLavado: '',
    peinado: '',
    secado: '',
    productos: '',
    alergias: '',
    tipoAlergia: '',
    comentarios: '',
    tipoCueroCabelludo: '',
    alteraciones: '',
    forma: '',
    cantidad: '',
    grosor: '',
    tacto: '',
    brillo: '',
    longitud: '',
    porcentajeCanas: '',
    observaciones: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/guardar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Error al guardar datos');
      }

      alert('Datos guardados exitosamente');
      // Puedes hacer algo adicional después de guardar, como limpiar el formulario
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un problema al intentar guardar los datos');
    }
  };

  return (
    <div className={styles.container}>
      <h1>Cuestionario</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />
        
        <label htmlFor="fechaNacimiento">Fecha de Nacimiento:</label>
        <input type="date" id="fechaNacimiento" name="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleChange} required />
        
        <label htmlFor="sexo">Sexo:</label>
        <select id="sexo" name="sexo" value={formData.sexo} onChange={handleChange} required>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
          <option value="otro">Otro</option>
        </select>
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        
        <label htmlFor="frecuenciaLavado">Frecuencia de Lavado:</label>
        <input type="text" id="frecuenciaLavado" name="frecuenciaLavado" value={formData.frecuenciaLavado} onChange={handleChange} required />
        
        <label htmlFor="peinado">Peinado:</label>
        <input type="text" id="peinado" name="peinado" value={formData.peinado} onChange={handleChange} required />
        
        <label htmlFor="secado">Secado:</label>
        <input type="text" id="secado" name="secado" value={formData.secado} onChange={handleChange} required />
        
        <label htmlFor="productos">Productos:</label>
        <input type="text" id="productos" name="productos" value={formData.productos} onChange={handleChange} required />
        
        <label htmlFor="alergias">Alergias:</label>
        <input type="text" id="alergias" name="alergias" value={formData.alergias} onChange={handleChange} required />
        
        <label htmlFor="tipoAlergia">Tipo de Alergia:</label>
        <input type="text" id="tipoAlergia" name="tipoAlergia" value={formData.tipoAlergia} onChange={handleChange} required />
        
        <label htmlFor="comentarios">Comentarios:</label>
        <textarea id="comentarios" name="comentarios" rows="4" value={formData.comentarios} onChange={handleChange} required></textarea>
        
        <label htmlFor="tipoCueroCabelludo">Tipo de Cuero Cabelludo:</label>
        <input type="text" id="tipoCueroCabelludo" name="tipoCueroCabelludo" value={formData.tipoCueroCabelludo} onChange={handleChange} required />
        
        <label htmlFor="alteraciones">Alteraciones:</label>
        <input type="text" id="alteraciones" name="alteraciones" value={formData.alteraciones} onChange={handleChange} required />
        
        <label htmlFor="forma">Forma:</label>
        <input type="text" id="forma" name="forma" value={formData.forma} onChange={handleChange} required />
        
        <label htmlFor="cantidad">Cantidad:</label>
        <input type="text" id="cantidad" name="cantidad" value={formData.cantidad} onChange={handleChange} required />
        
        <label htmlFor="grosor">Grosor:</label>
        <input type="text" id="grosor" name="grosor" value={formData.grosor} onChange={handleChange} required />
        
        <label htmlFor="tacto">Tacto:</label>
        <input type="text" id="tacto" name="tacto" value={formData.tacto} onChange={handleChange} required />
        
        <label htmlFor="brillo">Brillo:</label>
        <input type="text" id="brillo" name="brillo" value={formData.brillo} onChange={handleChange} required />
        
        <label htmlFor="longitud">Longitud:</label>
        <input type="text" id="longitud" name="longitud" value={formData.longitud} onChange={handleChange} required />
        
        <label htmlFor="porcentajeCanas">Porcentaje de Canas:</label>
        <input type="text" id="porcentajeCanas" name="porcentajeCanas" value={formData.porcentajeCanas} onChange={handleChange} required />
        
        <label htmlFor="observaciones">Observaciones:</label>
        <textarea id="observaciones" name="observaciones" rows="4" value={formData.observaciones} onChange={handleChange} required></textarea>
        
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default CuestionarioForm;
